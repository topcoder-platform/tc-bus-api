const utils = require('../utils/writer.js')
const Topics = require('../service/TopicsService')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')

const getTopics = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  try {
    const topics = await MessageBusService.getAllTopics()
    console.log(topics)
    utils.writeJson(res, topics)

  } catch (err) {
    utils.writeJson(res, err)
  }
}

const headTopics = async (req, res) => {
  try {
    const response = await Topics.headTopics()
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}


module.exports = {
  getTopics,
  headTopics
}