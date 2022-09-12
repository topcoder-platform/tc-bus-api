const utils = require('../utils/writer.js')
const Healthchecks = require('../service/HealthchecksService')

getHealth = async (req, res) => {
  try {
    const response = await Healthchecks.getHealth()
    utils.writeJson(res, response)
  } catch (e) {
    utils.writeJson(res, e)
  }
}

headHealth = async (req, res) => {
  try {
    const response = await Healthchecks.headHealth()
    utils.writeJson(res, response)
  } catch (err) {
    utils.writeJson(res, err)
  }
}

module.exports = {
  getHealth,
  headHealth
}
