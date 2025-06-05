require('dotenv').config()
const fs = require('fs')
const path = require('path')
const http = require('http')
const config = require('config')

const app = require('connect')()
const bodyParser = require('body-parser')
const swaggerTools = require('swagger-tools')
const jsyaml = require('js-yaml')
const cors = require('cors')

const MessageBusService = require('./service/MessageBusService')
const logger = require('./common/logger')
const AuthService = require('./service/AuthService')

const serverPort = config.PORT

const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

errorTypes.forEach(type => {
  process.on(type, e => {
    try {
      console.log(`process.on ${type}`)
      console.log(e)
      process.exit(0)
    } catch (_) {
      process.exit(1)
    }
  })
})

signalTraps.forEach(type => {
  process.once(type, () => {
    try {
      console.log(`process.once ${type}`)
    } finally {
      process.kill(process.pid, type)
    }
  })
})

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
}

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8')
const swaggerDoc = jsyaml.load(spec)

// Extending payload size
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        // disable cors if service to service request
        callback(null, false)
      } else {
        callback(null, /topcoder(-dev|-qa)?\.com$/)
      }
    },
    exposedHeaders: [
      'X-Prev-Page',
      'X-Next-Page',
      'X-Page',
      'X-Per-Page',
      'X-Total',
      'X-Total-Pages',
      'Link'
    ]
  })
)

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata())

  // Authentication
  if (!config.BYPASS_AUTH) {
    app.use(middleware.swaggerSecurity({
      Bearer: AuthService()
    }))
  }

  // Validate Swagger requests
  app.use(middleware.swaggerValidator())

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options))

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi())

  MessageBusService.init()
    .then(() => {
      http.createServer(app).listen(serverPort, function () {
        logger.info(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`)
        logger.info(`Swagger-ui is available on http://localhost:${serverPort}/docs`)
      })
    }).catch((err) => {
      logger.error(`Server start error ${err}`)
    })
})
