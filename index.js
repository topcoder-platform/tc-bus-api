/**
 * Initialize and start the express application.
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')
const morgan = require('morgan')
const _ = require('lodash')

const logger = require('./common/logger')
const routes = require('./routes')
const MessageBusService = require('./services/MessageBusService')

process.env.NODE_ENV = (process.env.ENV === 'PROD') ? 'production' : 'development'

// Create app
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Request logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else if (process.env.NODE_ENV === 'production') {
  app.use(morgan('common', {skip: (req, res) => res.statusCode < 400}))
}

// Routes
app.use(config.CONTEXT_PATH, routes)

// Error handler
app.use((err, req, res, next) => {
  let status = err.status || 500
  let message = err.message
  if (err.isJoi) {
    status = 400
    message = _(err.details).map('message').join(', ')
  } else if (status === 500) {
    message = 'Internal server error'
  }
  res.status(status)
  res.send({message})
  logger.error(err)
})

// Start
MessageBusService.init()
  .then(() => {
    app.listen(config.PORT, '0.0.0.0')
    logger.info('Express server listening on port %d in %s mode', config.PORT, process.env.NODE_ENV)
  })
