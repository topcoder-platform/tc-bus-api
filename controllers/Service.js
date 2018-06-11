'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.createService = function createService (req, res, next) {
  var body = req.swagger.params['body'].value;
  Service.createService(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createServicePayload = function createServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var body = req.swagger.params['body'].value;
  Service.createServicePayload(serviceName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteService = function deleteService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  Service.deleteService(serviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServicePayload = function deleteServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var payloadName = req.swagger.params['payloadName'].value;
  Service.deleteServicePayload(serviceName,payloadName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getService = function getService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  Service.getService(serviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePayload = function getServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var payloadName = req.swagger.params['payloadName'].value;
  Service.getServicePayload(serviceName,payloadName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicePayloads = function getServicePayloads (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var page = req.swagger.params['page'].value;
  var perPage = req.swagger.params['perPage'].value;
  Service.getServicePayloads(serviceName,page,perPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServices = function getServices (req, res, next) {
  var page = req.swagger.params['page'].value;
  var perPage = req.swagger.params['perPage'].value;
  Service.getServices(page,perPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headService = function headService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  Service.headService(serviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headServicePayload = function headServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var payloadName = req.swagger.params['payloadName'].value;
  Service.headServicePayload(serviceName,payloadName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headServicePayloads = function headServicePayloads (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var page = req.swagger.params['page'].value;
  var perPage = req.swagger.params['perPage'].value;
  Service.headServicePayloads(serviceName,page,perPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headServices = function headServices (req, res, next) {
  var page = req.swagger.params['page'].value;
  var perPage = req.swagger.params['perPage'].value;
  Service.headServices(page,perPage)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchService = function patchService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var body = req.swagger.params['body'].value;
  Service.patchService(serviceName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchServicePayload = function patchServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var payloadName = req.swagger.params['payloadName'].value;
  var body = req.swagger.params['body'].value;
  Service.patchServicePayload(serviceName,payloadName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateService = function updateService (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var body = req.swagger.params['body'].value;
  Service.updateService(serviceName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServicePayload = function updateServicePayload (req, res, next) {
  var serviceName = req.swagger.params['serviceName'].value;
  var payloadName = req.swagger.params['payloadName'].value;
  var body = req.swagger.params['body'].value;
  Service.updateServicePayload(serviceName,payloadName,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
