/**
 * Configure the logger.
 */
const config = require('config')
const { createLogger, format, transports } = require('winston')

const { combine, timestamp, errors, splat, printf, colorize } = format

// Human‑readable, compact console format
const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  // Prefer stack when present (errors)
  const msg = stack || message
  return `${timestamp} ${level}: ${msg}`
})

const consoleTransport = new transports.Console({
  handleExceptions: true
})

const baseFormats = [
  errors({ stack: true }),
  splat(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
]

// Colorize only when attached to a TTY to avoid noisy logs in aggregators
const prettyFormats = process.stdout.isTTY
  ? combine(colorize(), ...baseFormats, consoleFormat)
  : combine(...baseFormats, consoleFormat)

const logger = createLogger({
  level: config.LOG_LEVEL,
  format: prettyFormats,
  transports: [consoleTransport]
})

module.exports = logger
