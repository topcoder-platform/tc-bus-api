/**
 * The Topic controller.
 */
const MessageBusService = require('../services/MessageBusService')
const helper = require('../common/helper')
const config = require('config')

/**
 * Get all topic names.
 *
 * @param {Object} req the request
 * @param {Object} res the response
 * @param {Function} next the next middleware
 */
async function getAll (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  const topics = await MessageBusService.getAllTopics()
  res.send(topics)
  next()
}

module.exports = {
  getAll
}
