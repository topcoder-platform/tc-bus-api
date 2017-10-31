/**
 * Generate JWT tokens for all allowed services.
 */
const config = require('config')
const _ = require('lodash')

const helper = require('./common/helper')

_.forEach(config.ALLOWED_SERVICES, (name) => {
  console.log(`Service: ${name} ---- Token: ${helper.signJwtToken({name})}`)
})
