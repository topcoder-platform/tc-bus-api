const utils = require('../utils/writer.js')
const Healthchecks = require('../service/HealthchecksService')
const logger = require('../common/logger.js')

const getHealth = async (req, res) => {
  try {
    const response = await Healthchecks.getHealth()
    utils.writeJson(res, response)
  } catch (e) {
    utils.writeJson(res, e)
  }
}

const headHealth = async (req, res) => {
  try {
    const response = await Healthchecks.headHealth()
    utils.writeJson(res, response)
  } catch (err) {
    logger.error(err)
    utils.writeJson(res, err)
  }
}

module.exports = {
  getHealth,
  headHealth
}
