/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const _ = require('lodash')
const { Kafka } = require('kafkajs')
const helper = require('../common/helper')


const kafka = new Kafka({
  clientId: 'BUS-API',
  brokers: KAFKA_URL,
  ssl: {
    cert: KAFKA_CLIENT_CERT,
    key: KAFKA_CLIENT_CERT_KEY,
  }
})
// Create a new producer instance with KAFKA_URL, KAFKA_CLIENT_CERT, and
// KAFKA_CLIENT_CERT_KEY environment variables
const producer = kafka.producer()

/**
 * Initialize the Kafka producer.
 */
async function init() {
  await producer.connect()
}

/**
 * Post a new event to Kafka.
 *
 * @param {Object} event the event to post
 */
async function postEvent(event) {
  // var result

  if (_.has(event, 'payload')) {
    helper.validateEventPayload(event)

    // Post new structure
    const messages = [{
      value: JSON.stringify(event)
    }]
    if (event.key) {
      _.merge(messages[0], { key: event.key })
    }
    const kafkaPayload = {
      topic: event.topic,
      messages
    }
    const result = await producer.send(kafkaPayload)
    // Check if there is any error
    const error = _.get(result, '[0].error')
    if (error) {
      if (error.code === 'UnknownTopicOrPartition') {
        throw createError.BadRequest(`Unknown event type "${event.topic}"`)
      }
      throw createError.InternalServerError()
    }
  } else {
    throw createError.BadRequest(`Expecting new (mimetype-payload) structure`)
  }
}

/**
 * Get all topic names from Kafka.
 *
 * @returns {Array} the topic names
 */
async function getAllTopics() {
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
