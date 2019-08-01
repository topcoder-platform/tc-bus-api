'use strict'

const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')
const utils = require('../utils/writer.js')

/**
 * Post event to the message bus.
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.postEvent = function postEvent (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  MessageBusService
    .postEvent(req.body, req.span)
    .then(() => {
      utils.writeJson(res, null, 204, req.span)
    })
    .catch(e => next(e))
}
