'use strict'

const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const utils = require('../utils/writer.js')

module.exports.postEvent = function postEvent (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  MessageBusService
    .postEvent(req.body)
    .then(() => {
      utils.writeJson(res, null, 204)
    })
}
