const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const utils = require('../utils/writer.js')

postEvent = async (req, res) => {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  await MessageBusService.postEvent(req.body)
  utils.writeJson(res, null, 204)
}
module.exports = {
  postEvent
}
