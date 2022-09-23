/**
 * The Message Bus service provides operations to the remote Kafka.
 */
const createError = require('http-errors')
const _ = require('lodash')
const { Kafka } = require('kafkajs')
const helper = require('../common/helper')
const config = require('config')
const logger = require('../common/logger')

const KafkaConfig = {
  clientId: 'BUS-API',
  brokers: config.get('KAFKA_URL').split(','),
}
if (config.get('KAFKA_CLIENT_CERT')) {
  kafkaConfig.ssl = {
    cert: config.get('KAFKA_CLIENT_CERT'),
    key: config.get('KAFKA_CLIENT_CERT_KEY'),
  }
}

const kafka = new Kafka(KafkaConfig)
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
    return result
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
  try {

    const admin = kafka.admin()
    await admin.connect()
    const result = await admin.listTopics()
    await admin.disconnect()
    // Get the topic names
    return result
  } catch (err) {
    logger.error(err)
    return ["Error"]
  }
}

/**
 * Create topics in kafka.
 *
 * @returns {Array} the topic names
 */
async function createTopics(topicLists) {
  try {
    const topics = []
    topicLists.map(topic => {
      topic.topics.map(topicName => {
        topics.push({ topic: topicName })
      })
    })
    const admin = kafka.admin()
    await admin.connect()
    const result = await admin.createTopics({
      topics,
    })
    await admin.disconnect()
    return result ? topics : []
  } catch (err) {
    logger.error(err)
    return ["Error"]
  }
}


module.exports = {
  init,
  postEvent,
  getAllTopics,
  createTopics
}

helper.buildService(module.exports)
