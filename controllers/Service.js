'use strict'

var utils = require('../utils/writer.js')
var Service = require('../service/ServiceService')

/**
 * Create a service
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.createService = function createService (req, res, next) {
  Service.createService(req.body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Create the service payload
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.createServicePayload = function createServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var body = req.swagger.params['body'].value
  Service.createServicePayload(serviceName, body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Delete a service
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.deleteService = function deleteService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  Service.deleteService(serviceName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Delete the service payload
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.deleteServicePayload = function deleteServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var payloadName = req.swagger.params['payloadName'].value
  Service.deleteServicePayload(serviceName, payloadName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Get the service
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getService = function getService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  Service.getService(serviceName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Get the service payload
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getServicePayload = function getServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var payloadName = req.swagger.params['payloadName'].value
  Service.getServicePayload(serviceName, payloadName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Search the service payloads
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getServicePayloads = function getServicePayloads (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var page = req.swagger.params['page'].value
  var perPage = req.swagger.params['perPage'].value
  Service.getServicePayloads(serviceName, page, perPage, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Search the services
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.getServices = function getServices (req, res, next) {
  var page = req.swagger.params['page'].value
  var perPage = req.swagger.params['perPage'].value
  Service.getServices(page, perPage, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Head the service
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headService = function headService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  Service.headService(serviceName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Head the service payload
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headServicePayload = function headServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var payloadName = req.swagger.params['payloadName'].value
  Service.headServicePayload(serviceName, payloadName, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Head the service payloads
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headServicePayloads = function headServicePayloads (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var page = req.swagger.params['page'].value
  var perPage = req.swagger.params['perPage'].value
  Service.headServicePayloads(serviceName, page, perPage, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Head the service payloads
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.headServices = function headServices (req, res, next) {
  var page = req.swagger.params['page'].value
  var perPage = req.swagger.params['perPage'].value
  Service.headServices(page, perPage, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Partially update the service.
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.patchService = function patchService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var body = req.swagger.params['body'].value
  Service.patchService(serviceName, body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Partially update the service payload.
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.patchServicePayload = function patchServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var payloadName = req.swagger.params['payloadName'].value
  var body = req.swagger.params['body'].value
  Service.patchServicePayload(serviceName, payloadName, body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Update the service.
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.updateService = function updateService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var body = req.swagger.params['body'].value
  Service.updateService(serviceName, body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}

/**
 * Update the service payload.
 * @param req the http request
 * @param res the http response
 * @param next the next middleware in the chain
 */
module.exports.updateServicePayload = function updateServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value
  var payloadName = req.swagger.params['payloadName'].value
  var body = req.swagger.params['body'].value
  Service.updateServicePayload(serviceName, payloadName, body, req.span)
    .then(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
    .catch(function (response) {
      utils.writeJson(res, response, null, req.span)
    })
}
