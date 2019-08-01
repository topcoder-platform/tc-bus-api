/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const _ = require('lodash')
const Kafka = require('no-kafka')

const helper = require('../common/helper')
const tracer = require('../common/tracer')

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
 * @param {Object} event the event to post
 * @param {Object} parentSpan the parent Span object
 */
async function postEvent (event, parentSpan) {
  const childSpan = tracer.startChildSpans('MessageBusService.postEvent', parentSpan)
  try {
    if (_.has(event, 'payload')) {
      helper.validateEventPayload(event)

      // Post new structure
      const result = await producer.send({
        topic: event.topic,
        message: {
          value: JSON.stringify(event)
        }
      })
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
  } finally {
    childSpan.finish()
  }
}

/**
 * Get all topic names from Kafka.
 *
 * @returns {Array} the topic names
 * @param {Object} parentSpan the parent Span object
 */
async function getAllTopics (parentSpan) {
  const childSpan = tracer.startChildSpans('MessageBusService.getAllTopics', parentSpan)

  try {
    // Update the metadata from Kafka to make sure
    // the no-kafka client has the latest info
    await producer.client.updateMetadata()

    // Get the topic names
    return _.keys(producer.client.topicMetadata)
  } finally {
    childSpan.finish()
  }
}

module.exports = {
  init,
  postEvent,
  getAllTopics
}

helper.buildService(module.exports)
