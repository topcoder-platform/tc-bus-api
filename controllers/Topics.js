'use strict';

var utils = require('../utils/writer.js');
var Topics = require('../service/TopicsService');

module.exports.getTopics = function getTopics (req, res, next) {
  Topics.getTopics()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.headTopics = function headTopics (req, res, next) {
  Topics.headTopics()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
