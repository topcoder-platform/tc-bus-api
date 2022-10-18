const logger = require('../common/logger')
const Placeholders = require('../service/PlaceholdersService')
const utils = require('../utils/writer.js')

const clearPlaceholdersCache = async (req, res) => {
  const span = await logger.startSpan('clearPlaceholdersCache')
  try {
    await Placeholders.clearAllPlaceholders()
    await logger.endSpan(span)
    utils.writeJson(res, null, 200)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  clearPlaceholdersCache
}
logger.buildService(module.exports)
