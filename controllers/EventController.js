/**
 * The Event controller.
 */
const MessageBusService = require('../services/MessageBusService')

/**
 * Create a new event.
 *
 * @param {Object} req the request
 * @param {Object} res the response
 * @param {Function} next the next middleware
 */
async function create (req, res, next) {
  await MessageBusService.postEvent(req.sourceServiceName, req.body)
  res.status(204).end()
  next()
}

module.exports = {
  create
}
