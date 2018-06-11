'use strict';

var utils = require('../utils/writer.js');
var Placeholders = require('../service/PlaceholdersService');

module.exports.clearPlaceholdersCache = function clearPlaceholdersCache (req, res, next) {
  Placeholders.clearPlaceholdersCache()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
