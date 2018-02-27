/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const Joi = require('joi')
const _ = require('lodash')
const config = require('config')
const Kafka = require('no-kafka')

const helper = require('../common/helper')

const PlaceholderService = require('./PlaceholderService')

// Create a new producer instance with KAFKA_URL, KAFKA_CLIENT_CERT, and
// KAFKA_CLIENT_CERT_KEY environment variables
const producer = new Kafka.Producer()

/**
 * Initialize the Kafka producer.
 */
async function init () {
  await producer.init()
}

/**
 * Post a new event to Kafka.
 *
 * @param {String} sourceServiceName the source service name
 * @param {Object} event the event to post
 */
async function postEvent (sourceServiceName, event) {
  const message = helper.validateEvent(sourceServiceName, event)

  if (event.type.startsWith('email.')) {
    let placeholders
    try {
      placeholders = await PlaceholderService.getAllPlaceholders(event.type)
    } catch (err) {
      throw createError.InternalServerError()
    }

    const keys = _.fromPairs(_.map(placeholders, o => [o, Joi.string().required().min(1)]))
    const schema = Joi.object().keys({
      data: Joi.object().keys(keys).required(),
      recipients: Joi.array().items(Joi.string().email()).min(1).required()
    })
    const { error } = Joi.validate(message, schema)
    if (error) {
      throw error
    }
  }

  // Post
  const result = await producer.send({
    topic: `${config.KAFKA_TOPIC_PREFIX}${event.type}`,
    message: {
      value: event.message
    }
  })

  // Check if there is any error
  const error = _.get(result, '[0].error')
  if (error) {
    if (error.code === 'UnknownTopicOrPartition') {
      throw createError.BadRequest(`Unknown event type "${event.type}"`)
    }

    throw createError.InternalServerError()
  }
}

postEvent.schema = Joi.object().keys({
  sourceServiceName: Joi.string().required(),
  event: Joi.object().keys({
    type: Joi
      .string()
      .regex(/^([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+$/)
      .error(createError.BadRequest(
        '"type" must be a fully qualified name - dot separated string'))
      .required(),
    message: Joi.string().required()
  })
})

/**
 * Get all topic names from Kafka.
 *
 * @returns {Array} the topic names
 */
async function getAllTopics () {
  // Update the metadata from Kafka to make sure
  // the no-kafka client has the latest info
  await producer.client.updateMetadata()

  // Get the topic names
  return _.keys(producer.client.topicMetadata)
}

module.exports = {
  init,
  postEvent,
  getAllTopics
}

helper.buildService(module.exports)
