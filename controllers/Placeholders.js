'use strict'

const Placeholders = require('../service/PlaceholdersService')
const utils = require('../utils/writer.js')

/**
 * Clear place holders cache
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.clearPlaceholdersCache = function clearPlaceholdersCache (req, res, next) {
  Placeholders
    .clearAllPlaceholders(req.span)
    .then(() => {
      utils.writeJson(res, null, 200, req.span)
    })
    .catch(e => next(e))
}
