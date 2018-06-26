'use strict'

const Placeholders = require('../service/PlaceholdersService')
const utils = require('../utils/writer.js')

module.exports.clearPlaceholdersCache = function clearPlaceholdersCache (req, res, next) {
  Placeholders
    .clearAllPlaceholders()
    .then(() => {
      utils.writeJson(res, null, 200)
    })
}
