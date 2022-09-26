/**
 * This file defines helper methods.
 */
const util = require('util')
const _ = require('lodash')
const Joi = require('joi')
const getParams = require('get-parameter-names')
const config = require('config')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const logger = require('./logger')

/**
 * Convert array with arguments to object.
 *
 * @param {Array} params the name of parameters
 * @param {Array} arr the array with values
 * @returns {Object} the combined object
 * @private
 */
function combineObject(params, arr) {
  const ret = {}
  _.forEach(arr, (arg, i) => {
    ret[params[i]] = arg
  })
  return ret
}

/**
 * Decorate all functions of a service and log debug information if DEBUG is enabled.
 *
 * @param {Object} service the service
 * @private
 */
function decorateWithLogging(service) {
  if (config.LOG_LEVEL !== 'debug') {
    return
  }
  _.forEach(service, (method, name) => {
    const params = method.params || getParams(method)
    service[name] = async function serviceMethodWithLogging(...args) {
      logger.debug(`ENTER ${name}`)
      logger.info(`input arguments: ${util.inspect(combineObject(params, args))}`)
      const result = await method.apply(this, args)
      logger.debug(`EXIT ${name}`)
      logger.debug(`output: ${util.inspect(result)}`)
      return result
    }
  })
}

/**
 * Decorate all functions of a service and validate input values
 * and replace input arguments with sanitized result = require('Joi.
 * Service method must have a `schema` property with Joi schema.
 *
 * @param {Object} service the service
 * @private
 */
function decorateWithValidator(service) {
  _.forEach(service, (method, name) => {
    if (!method.schema) {
      return
    }
    const params = getParams(method)
    service[name] = async function serviceMethodWithValidation(...args) {
      const value = combineObject(params, args)
      const normalized = Joi.attempt(value, method.schema, { abortEarly: false })
      // Joi will normalize values
      // for example string number '1' to 1
      // if schema type is number
      const newArgs = _.map(params, (param) => normalized[param])
      return method.apply(this, newArgs)
    }
    service[name].params = params
  })
}

/**
 * Apply logger and validation decorators to the service.
 *
 * @export helper/buildService
 * @param {any} service the service to wrap
 */
function buildService(service) {
  decorateWithValidator(service)
  decorateWithLogging(service)
}

/**
 * Verify the JWT token and get the payload.
 *
 * @param {String} token the JWT token to verify
 * @returns {Object} the payload decoded from the token
 */
function verifyJwtToken(token) {
  let payload

  try {
    payload = jwt.verify(token, config.JWT_TOKEN_SECRET)
  } catch (err) {
    if (err.message === 'jwt expired') {
      throw createError.Unauthorized('Token has been expired')
    }

    throw createError.Unauthorized('Failed to verify token')
  }

  if (!payload) {
    throw createError.Unauthorized('Failed to decode token')
  }

  return payload
}

/**
 * Validate the event payload
 *
 * @param {Object} event the event payload
 */
function validateEventPayload(event) {
  const schema = Joi.object().keys({
    event: Joi.object().keys({
      topic: Joi
        .string()
        .regex(/^([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+$/)
        .error(createError.BadRequest(
          '"topic" must be a fully qualified name - dot separated string'))
        .required(),
      originator: Joi.string().required(),
      timestamp: Joi.string().required(),
      'mime-type': Joi.string().required(),
      key: Joi.string(),
      payload: Joi.any()
    })
  })

  const { error } = schema.validate({ event })
  if (error) {
    throw error
  }
}

function verifyTokenScope(req, scope) {
  const isMachineToken = _.get(req.swagger.params, 'authUser.isMachine', false)
  const scopes = _.get(req.swagger.params, 'authUser.scopes', [])
  if (isMachineToken && !(_.indexOf(scopes, scope) >= 0)) {
    throw createError.Unauthorized('Check your token scope.')
  }
}

module.exports = {
  buildService,
  verifyJwtToken,
  validateEventPayload,
  verifyTokenScope
}
