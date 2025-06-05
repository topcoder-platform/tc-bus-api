/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const _ = require('lodash')
const { Kafka } = require('kafkajs')
const helper = require('../common/helper')
const config = require('config')
const logger = require('../common/logger')

let brokers = ['']
if (config.KAFKA_URL.startsWith('ssl://')) {
  brokers = config.KAFKA_URL.split('ssl://')[1].split(',')
} else {
  brokers = config.KAFKA_URL.split(',')
}
const kafkaConfig = {
  clientId: 'BUS-API',
  brokers
}

if (config.get('KAFKA_CLIENT_CERT')) {
  kafkaConfig.ssl = {
    cert: config.get('KAFKA_CLIENT_CERT'),
    key: config.get('KAFKA_CLIENT_CERT_KEY')
  }
}

const kafka = new Kafka(kafkaConfig)
// Create a new producer instance with KAFKA_URL, KAFKA_CLIENT_CERT, and
// KAFKA_CLIENT_CERT_KEY environment variables
const producer = kafka.producer()

/**
 * Initialize the Kafka producer.
 */
async function init () {
  await producer.connect()
}

/**
 * Post a new event to Kafka.
 *
 * @param {Object} event the event to post
 */
async function postEvent (event) {
  // var result
  const span = await logger.startSpan('postEventKafka')
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
    await logger.endSpan(span)
    return result
  } else {
    await logger.endSpanWithError(span, 'Invalid event payload')
    throw createError.BadRequest('Expecting new (mimetype-payload) structure')
  }
}

/**
 * Get all topic names from Kafka.
 *
 * @returns {Array} the topic names
 */
async function getAllTopics () {
  const span = await logger.startSpan('getAllTopicsKafka')
  try {
    const admin = kafka.admin()
    await admin.connect()
    const result = await admin.listTopics()
    await admin.disconnect()
    await logger.endSpan(span)
    // Get the topic names
    return result
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    return ['Error']
  }
}

/**
 * Create topics in kafka.
 *
 * @returns {Array} the topic names
 */
async function createTopics (topicLists) {
  const span = await logger.startSpan('createTopicsKafka')
  try {
    const topics = []
    topicLists.map(topic => {
      topic.topics.map(topicName => {
        topics.push({ topic: topicName })
        return ''
      })
      return ''
    })
    const admin = kafka.admin()
    await admin.connect()
    const result = await admin.createTopics({
      topics
    })
    await admin.disconnect()
    await logger.endSpan(span)
    return result ? topics : []
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    return ['Error']
  }
}

module.exports = {
  init,
  postEvent,
  getAllTopics,
  createTopics
}

helper.buildService(module.exports)
