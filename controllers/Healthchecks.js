'use strict';

var utils = require('../utils/writer.js');
var Healthchecks = require('../service/HealthchecksService');

module.exports.getHealth = function getHealth (req, res, next) {
  Healthchecks.getHealth()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headHealth = function headHealth (req, res, next) {
  Healthchecks.headHealth()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
