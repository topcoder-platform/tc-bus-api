/**
 * Create a service.
 * Create a new service.
 *
 * body Service
 * no response value expected for this operation
 **/
exports.createService = function (body) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Create the service payload.
 * Create the payload for the given service.
 *
 * serviceName String The service name.
 * body Payload
 * returns Payload
 **/
exports.createServicePayload = function (serviceName, body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Delete the service.
 * Delete the service.
 *
 * serviceName String The service name.
 * no response value expected for this operation
 **/
exports.deleteService = function (serviceName) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Delete the service payload.
 * Delete the payload for the given service.
 *
 * serviceName String The service name.
 * payloadName String The payload name.
 * no response value expected for this operation
 **/
exports.deleteServicePayload = function (serviceName, payloadName) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get the service.
 * Get the service by service name.
 *
 * serviceName String The service name.
 * returns ExtendedService
 **/
exports.getService = function (serviceName) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = ''
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Get the service payload.
 * Get the payload for the given service.
 *
 * serviceName String The service name.
 * payloadName String The payload name.
 * returns Payload
 **/
exports.getServicePayload = function (serviceName, payloadName) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Search the service payloads.
 * Search payloads for the service.
 *
 * serviceName String The service name.
 * page Integer The page number. (optional)
 * perPage Integer The number of items to list per page. (optional)
 * returns List
 **/
exports.getServicePayloads = function (serviceName, page, perPage) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = [{
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }, {
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }]
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Get all services.
 * Get all services. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL.
 *
 * page Integer The page number. (optional)
 * perPage Integer The number of items to list per page. (optional)
 * returns List
 **/
exports.getServices = function (page, perPage) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = ['', '']
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Get only response status and headers information but no response body for the endpoint.
 * Get response status and headers information for the endpoint. It does not contain response body.
 *
 * serviceName String The service name.
 * no response value expected for this operation
 **/
exports.headService = function (serviceName) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get only response status and headers information but no response body for the endpoint.
 * Get response status and headers information for the endpoint. It does not contain response body.
 *
 * serviceName String The service name.
 * payloadName String The payload name.
 * no response value expected for this operation
 **/
exports.headServicePayload = function (serviceName, payloadName) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get only response status and headers information but no response body for the endpoint.
 * Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body.
 *
 * serviceName String The service name.
 * page Integer The page number. (optional)
 * perPage Integer The number of items to list per page. (optional)
 * no response value expected for this operation
 **/
exports.headServicePayloads = function (serviceName, page, perPage) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Get only response status and headers information but no response body for the endpoint.
 * Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body.
 *
 * page Integer The page number. (optional)
 * perPage Integer The number of items to list per page. (optional)
 * no response value expected for this operation
 **/
exports.headServices = function (page, perPage) {
  return new Promise(function (resolve, reject) {
    resolve()
  })
}

/**
 * Partially update the service.
 * Allows to partially modify the service with the provided request parameters.
 *
 * serviceName String The service name.
 * body Body The Service entity.
 * returns ExtendedService
 **/
exports.patchService = function (serviceName, body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = ''
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Partially update the payload.
 * Allows to partially modify the payload with the provided request parameters.
 *
 * serviceName String The service name.
 * payloadName String The payload name.
 * body Body_1
 * returns Payload
 **/
exports.patchServicePayload = function (serviceName, payloadName, body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Update the service.
 * Update the service by service name.
 *
 * serviceName String The service name.
 * body ExtendedService
 * returns ExtendedService
 **/
exports.updateService = function (serviceName, body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = ''
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}

/**
 * Update the service payload.
 * Update the payload for the given service.
 *
 * serviceName String The service name.
 * payloadName String The payload name.
 * body Payload
 * returns Payload
 **/
exports.updateServicePayload = function (serviceName, payloadName, body) {
  return new Promise(function (resolve, reject) {
    var examples = {}
    examples['application/json'] = {
      'name': 'createEvent',
      'topics': ['notifications.kafka.queue.java.test'],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]])
    } else {
      resolve()
    }
  })
}
