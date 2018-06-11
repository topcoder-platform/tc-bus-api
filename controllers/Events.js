'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.postEvent = function postEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Events.postEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
