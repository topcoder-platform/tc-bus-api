/**
 * Service relate to topcoder services
 */
const tracer = require('../common/tracer')
const helper = require('../common/helper')

/**
 * Create a service.
 *
 * @param {Object} body the service
 * @param {Object} parentSpan the parent Span object
 */
async function createService (body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.createService', parentSpan)
  childSpan.finish()
}

/**
 * Create the service payload.
 *
 * @param {String} serviceName the service name.
 * @param {Object} body the service payload
 * @param {Object} parentSpan the parent Span object
 * @returns {Object} the service payload
 */
async function createServicePayload (serviceName, body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.createServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  const examples = {}
  examples['application/json'] = {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  }
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Delete the service.
 *
 * @param {String} serviceName the service name.
 * @param {Object} parentSpan the parent Span object
 */
async function deleteService (serviceName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.deleteService', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.finish()
}

/**
 * Delete the service payload.
 *
 * @param {String} serviceName the service name.
 * @param {String} payloadName the payload name.
 * @param {Object} parentSpan the parent Span object
 */
async function deleteServicePayload (serviceName, payloadName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.deleteServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('payloadName', payloadName)
  childSpan.finish()
}

/**
 * Get the service by service name.
 *
 * @param {String} serviceName the service name.
 * @param {Object} parentSpan the parent Span object
 * @returns the service
 */
async function getService (serviceName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.getService', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  const examples = {}
  examples['application/json'] = ''
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Get the payload for the given service.
 *
 * @param {String} serviceName the service name.
 * @param {String} payloadName the payload name.
 * @param {Object} parentSpan the parent Span object
 * @returns service payload
 */
async function getServicePayload (serviceName, payloadName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.getServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('payloadName', payloadName)
  const examples = {}
  examples['application/json'] = {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  }
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Search the service payloads.
 *
 * @param {String} serviceName the service name.
 * @param {Number} page the page number. (optional)
 * @param {Number} perPage the number of items to list per page. (optional)
 * @param {Object} parentSpan the parent Span object
 * @returns the search result
 */
async function getServicePayloads (serviceName, page, perPage, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.getServicePayloads', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('page', page)
  childSpan.setTag('perPage', perPage)
  const examples = {}
  examples['application/json'] = [ {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  }, {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  } ]
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Get all services. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.
 *
 * @param {Number} page the page number. (optional)
 * @param {Number} perPage the number of items to list per page. (optional)
 * @param {Object} parentSpan the parent Span object
 * returns the search result
 */
async function getServices (page, perPage, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.getServices', parentSpan)
  childSpan.setTag('page', page)
  childSpan.setTag('perPage', perPage)
  const examples = {}
  examples['application/json'] = [ '', '' ]
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Head service.
 *
 * @param {String} serviceName the service name.
 * @param {Object} parentSpan the parent Span object
 */
async function headService (serviceName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.headService', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.finish()
}

/**
 * Head service payload.
 *
 * @param {String} serviceName the service name.
 * @param {String} payloadName the payload name.
 * @param {Object} parentSpan the parent Span object
 */
async function headServicePayload (serviceName, payloadName, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.headServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('payloadName', payloadName)
  childSpan.finish()
}

/**
 * Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body.
 *
 * @param {String} serviceName the service name.
 * @param {Number} page the page number. (optional)
 * @param {Number} perPage the number of items to list per page. (optional)
 * @param {Object} parentSpan the parent Span object
 */
async function headServicePayloads (serviceName, page, perPage, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.headServicePayloads', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('page', page)
  childSpan.setTag('perPage', perPage)
  childSpan.finish()
}

/**
 * Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body.
 *
 * @param {Number} page the page number. (optional)
 * @param {Number} perPage the number of items to list per page. (optional)
 * @param {Object} parentSpan the parent Span object
 */
async function headServices (page, perPage, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.headServices', parentSpan)
  childSpan.setTag('page', page)
  childSpan.setTag('perPage', perPage)
  childSpan.finish()
}

/**
 * Partially update the service.
 * Allows to partially modify the service with the provided request parameters.
 *
 * @param {String} serviceName the service name.
 * @param {Objct} body the Service entity.
 * @param {Object} parentSpan the parent Span object
 * returns the service
 */
async function patchService (serviceName, body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.patchService', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  const examples = {}
  examples['application/json'] = ''
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Partially update the payload.
 * Allows to partially modify the payload with the provided request parameters.
 *
 * @param {String} serviceName the service name.
 * @param {String} payloadName the payload name.
 * @param {Object} body the service payload
 * @param {Object} parentSpan the parent Span object
 * returns the service payload
 */
async function patchServicePayload (serviceName, payloadName, body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.patchServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('payloadName', payloadName)
  childSpan.setTag('body', body)
  const examples = {}
  examples['application/json'] = {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  }
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Update the service by service name.
 *
 * @param {String} serviceName the service name.
 * @param {Object} body the service
 * @param {Object} parentSpan the parent Span object
 * @returns the service
 */
async function updateService (serviceName, body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.updateService', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  const examples = {}
  examples['application/json'] = ''
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

/**
 * Update the payload for the given service.
 *
 * @param {String} serviceName the service name.
 * @param {String} payloadName the payload name.
 * @parm {Object} body the service payload
 * @param {Object} parentSpan the parent Span object
 * returns the service payload
 */
async function updateServicePayload (serviceName, payloadName, body, parentSpan) {
  const childSpan = tracer.startChildSpans('ServiceService.updateServicePayload', parentSpan)
  childSpan.setTag('serviceName', serviceName)
  childSpan.setTag('payloadName', payloadName)
  const examples = {}
  examples['application/json'] = {
    'name': 'createEvent',
    'topics': [ 'notifications.kafka.queue.java.test' ],
    'payloadMimeType': 'application/json',
    'payloadFormat': { }
  }
  childSpan.finish()
  return examples[Object.keys(examples)[0]]
}

module.exports = {
  createService,
  createServicePayload,
  deleteService,
  deleteServicePayload,
  getService,
  getServicePayload,
  getServicePayloads,
  getServices,
  headService,
  headServicePayload,
  headServicePayloads,
  headServices,
  patchService,
  patchServicePayload,
  updateService,
  updateServicePayload
}

helper.buildService(module.exports)
