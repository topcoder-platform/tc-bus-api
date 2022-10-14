const utils = require('../utils/writer.js')
const Healthchecks = require('../service/HealthchecksService')
const logger = require('../common/logger.js')
const { functionWrapper } = require('../utils/wrapper.js')

const getHealth = async (req, res) => {
  (await functionWrapper(async () => {
    try {
      const response = await Healthchecks.getHealth()
      utils.writeJson(res, response)
    } catch (e) {
      utils.writeJson(res, e)
    }
  }, 'getHealth'))(req, res)
}

const headHealth = async (req, res) => {
  (await functionWrapper(async () => {
    try {
      const response = await Healthchecks.headHealth()
      utils.writeJson(res, response)
    } catch (err) {
      logger.error(err)
      utils.writeJson(res, err)
    }
  }, 'headHealth'))(req, res)
}

module.exports = {
  getHealth,
  headHealth
}
