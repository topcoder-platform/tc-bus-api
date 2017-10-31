/**
 * Configure the logger.
 */
const config = require('config')
const winston = require('winston')

const logger = new winston.Logger({
  level: config.LOG_LEVEL,
  transports: [
    new winston.transports.Console({
      timestamp: () => new Date().toISOString()
    })
  ]
})

module.exports = logger
