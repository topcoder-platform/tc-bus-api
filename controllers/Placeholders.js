const Placeholders = require('../service/PlaceholdersService')
const utils = require('../utils/writer.js')

clearPlaceholdersCache = async (req, res) => {
  await Placeholders.clearAllPlaceholders()
  utils.writeJson(res, null, 200)
}

module.exports = {
  clearPlaceholdersCache
}
