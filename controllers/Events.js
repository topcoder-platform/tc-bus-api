const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const utils = require('../utils/writer.js')
const logger = require('../common/logger')

const postEvent = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  const span = await logger.startSpan('postEvent')
  try {
    const result = await MessageBusService.postEvent(req.body)
    await logger.endSpan(span)
    utils.writeJson(res, result[0].errorCode === 0 ? 'ok' : 'error', 200)
  } catch (err) {
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  postEvent
}
logger.buildService(module.exports)
