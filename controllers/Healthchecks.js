const utils = require('../utils/writer.js')
const Healthchecks = require('../service/HealthchecksService')
const logger = require('../common/logger.js')

const getHealth = async (req, res) => {
  const span = await logger.startSpan('getHealth')
  try {
    const response = await Healthchecks.getHealth()
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (e) {
    await logger.endSpanWithError(span, e)
    utils.writeJson(res, e)
  }
}

const headHealth = async (req, res) => {
  const span = await logger.startSpan('headHealth')
  try {
    const response = await Healthchecks.headHealth()
    await logger.endSpan(span)
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    await logger.endSpanWithError(span, err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  getHealth,
  headHealth
}
logger.buildService(module.exports)
