/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const Joi = require('joi')
const _ = require('lodash')
const config = require('config')
const Kafka = require('no-kafka')

const helper = require('../common/helper')

// Create a new producer instance with KAFKA_URL, KAFKA_CLIENT_CERT, and
// KAFKA_CLIENT_CERT_KEY environment variables
const producer = new Kafka.Producer()

/**
 * Initialize the Kafka producer.
 */
async function init () {
  await producer.init()
}

function validateServiceAccess(sourceServiceName){
  if (config.ALLOWED_SERVICES.indexOf(sourceServiceName)<0){
    throw createError.Unauthorized(`Service not allowed`)
  }
}

/**
 * Post a new event to Kafka.
 *
 * @param {String} sourceServiceName the source service name
 * @param {Object} event the event to post
 */
async function postEvent (sourceServiceName, event) {
  helper.validateEvent(sourceServiceName, event)
  validateServiceAccess(sourceServiceName);

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
