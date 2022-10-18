const utils = require('../utils/writer.js')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const logger = require('../common/logger')

const getTopics = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  const span = await logger.startSpan('getTopics')
  try {
    const topics = await MessageBusService.getAllTopics()
    await logger.endSpan(span)
    utils.writeJson(res, topics)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

const headTopics = async (req, res) => {
  const span = await logger.startSpan('headTopics')
  try {
    const response = await MessageBusService.createTopics(req.body)
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  getTopics,
  headTopics
}

logger.buildService(module.exports)