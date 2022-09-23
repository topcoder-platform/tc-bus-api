const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const utils = require('../utils/writer.js')
const logger = require('../common/logger')

const postEvent = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  try {
    const result = await MessageBusService.postEvent(req.body)
    utils.writeJson(res, result[0].errorCode === 0 ? 'ok' : 'error', 200)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}
module.exports = {
  postEvent
}
