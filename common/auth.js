/**
 * Authentication and authorization middleware.
 */
const _ = require('lodash')
const createError = require('http-errors')
const config = require('config')

const helper = require('./helper')

/**
 * Check if the request is authenticated and authorized.
 *
 * @param {Object} req the request
 * @param {Object} res the response
 * @param {Function} next the next middleware
 */
function auth (req, res, next) {
  // Parse the token from request header
  let token
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    throw createError.Unauthorized('Action is not allowed for anonymous')
  }

  const payload = helper.verifyJwtToken(token)

  // Check if the service name is in the allowed list
  if (!_.includes(config.ALLOWED_SERVICES, payload.name)) {
    throw createError.Forbidden(`Action is not allowed for ${payload.name} service`)
  }

  // Set source service name to the request
  req.sourceServiceName = payload.name
  next()
}

module.exports = auth
