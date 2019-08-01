'use strict'

const utils = require('../utils/writer.js')
const Healthchecks = require('../service/HealthchecksService')
const helper = require('../common/helper')

/**
 * Check api is health
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getHealth = function getHealth (req, res, next) {
  req.span = helper.createSpan('getHealthRequest', req.method, req.originalUrl)
  Healthchecks.getHealth(req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Head request of check api
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headHealth = function headHealth (req, res, next) {
  req.span = helper.createSpan('headHealthRequest', req.method, req.originalUrl)
  Healthchecks.headHealth(req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}
