/**
 * Service to find email template placeholders name.
 */

const Joi = require('joi')
const config = require('config')
const request = require('superagent')
const cache = require('memory-cache')
const tcCoreLibAuth = require('tc-core-library-js').auth
const m2m = tcCoreLibAuth.m2m(config)
const tracer = require('../common/tracer')
const helper = require('../common/helper')

/**
 * Get all email template placeholders name.
 *
 * @returns {Array} list with email template placeholders name
 */
async function getAllPlaceholders (name) {
  const cachedData = cache.get(`placeholders-${name}`)
  if (cachedData == null) {
    try {
      const token = await m2m.getMachineToken(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET)
      const data = await request
        .get(`${config.TC_EMAIL_SERVICE_URL}/templates/${name}`)
        .set('accept', 'json')
        .set('authorization', `Bearer ${token}`)
      const parsedData = JSON.parse(data.text)

      cache.put(`placeholders-${name}`, parsedData, config.TC_EMAIL_SERVICE_CACHE_PERIOD)

      return parsedData
    } catch (err) {
      console.log(`Error generating m2m token: ${err.message}`)
    }
  }

  return cachedData
}

getAllPlaceholders.schema = {
  name: Joi.string().required()
}

/**
 * Clear template placeholder cache.
 * @param {Object} parentSpan the parent Span object
 */
async function clearAllPlaceholders (parentSpan) {
  const childSpan = tracer.startChildSpans('PlaceholdersService.clearAllPlaceholders', parentSpan)
  try {
    cache.clear()
  } finally {
    childSpan.finish()
  }
}

module.exports = {
  getAllPlaceholders,
  clearAllPlaceholders
}

helper.buildService(module.exports)
