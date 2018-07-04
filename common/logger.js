/**
 * Configure the logger.
 */
const config = require('config')
const winston = require('winston')

const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  transports: [
    new winston.transports.Console()
  ]
})

module.exports = logger
