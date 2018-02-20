/**
 * The Placeholder controller.
 */
const PlaceholderService = require('../services/PlaceholderService')

/**
 * Clear placeholder cache.
 *
 * @param {Object} req the request
 * @param {Object} res the response
 * @param {Function} next the next middleware
 */
async function clearAll (req, res, next) {
  await PlaceholderService.clearAllPlaceholders()
  res.status(200).end()
  next()
}

module.exports = {
  clearAll
}
