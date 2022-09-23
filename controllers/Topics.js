const utils = require('../utils/writer.js')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const logger = require('../common/logger')

const getTopics = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  try {
    const topics = await MessageBusService.getAllTopics()
    utils.writeJson(res, topics)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}

const headTopics = async (req, res) => {
  try {
    const response = await MessageBusService.createTopics(req.body)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  getTopics,
  headTopics
}
