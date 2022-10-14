const utils = require('../utils/writer.js')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const logger = require('../common/logger')

const getTopics = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
    (await functionWrapper(async () => {
      try {
        const topics = await MessageBusService.getAllTopics()
        utils.writeJson(res, topics)
      } catch (err) {
        logger.error(err)
        utils.writeJson(res, err)
      }
    }, 'getTopics'))(req, res)
}

const headTopics = async (req, res) => {
  (await functionWrapper(async () => {
    try {
      const response = await MessageBusService.createTopics(req.body)
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headTopics'))(req, res)
}

module.exports = {
  getTopics,
  headTopics
}
