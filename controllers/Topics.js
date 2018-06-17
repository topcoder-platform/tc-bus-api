'use strict'

const utils = require('../utils/writer.js')
const Topics = require('../service/TopicsService')
const MessageBusService = require('../service/MessageBusService')
const helper = require('../common/helper')
const config = require('config')

module.exports.getTopics = function getTopics (req, res, next) {
  helper.verifyTokenScope(req, config.SCOPES.readBusTopics)
  MessageBusService
    .getAllTopics()
    .then(topics => {
      console.log(topics)
      utils.writeJson(res, topics)
    })
}

module.exports.headTopics = function headTopics (req, res, next) {
  Topics.headTopics()
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
