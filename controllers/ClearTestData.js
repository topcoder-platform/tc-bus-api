const utils = require('../utils/writer.js')
const ClearTestData = require('../service/ClearTestData')

module.exports.clearTestData = async function clearTestData (req, res, next) {
  await ClearTestData.clearTestData()
  utils.writeJson(res, null, 200)
}
