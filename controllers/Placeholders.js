const logger = require('../common/logger')
const Placeholders = require('../service/PlaceholdersService')
const utils = require('../utils/writer.js')

const clearPlaceholdersCache = async (req, res) => {
  try {
    await Placeholders.clearAllPlaceholders()
    utils.writeJson(res, null, 200)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  clearPlaceholdersCache
}
