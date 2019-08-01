'use strict'

const utils = require('../utils/writer.js')
const Topics = require('../service/TopicsService')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')

/**
 * Get all topics
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getTopics = function getTopics (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  MessageBusService
    .getAllTopics(req.span)
    .then(topics => {
      console.log(topics)
      utils.writeJson(res, topics, null, req.span)
    })
    .catch(e => next(e))
}

/**
 * Head topics
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headTopics = function headTopics (req, res, next) {
  Topics.headTopics(req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}
