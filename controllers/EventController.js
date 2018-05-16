/**
 * The Event controller.
 */
const MessageBusService = require('../services/MessageBusService')
const helper = require('../common/helper')
const config = require('config')

/**
 * Create a new event.
 *
 * @param {Object} req the request
 * @param {Object} res the response
 * @param {Function} next the next middleware
 */
async function create (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.writeBusApi)
  await MessageBusService.postEvent(req.body)
  res.status(204).end()
  next()
}

module.exports = {
  create
}
