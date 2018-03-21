/**
 * Configure application routes.
 */
const {Router} = require('express')
const requireDir = require('require-dir')
const jwtAuth = require('tc-core-library-js').middleware.jwtAuthenticator
const config = require('config')

const router = Router()
const controllers = requireDir('./controllers')

// Async error handling
const wrap = fn => (...args) => fn(...args).catch(args[2])

// Routes
router.post('/events', jwtAuth(), wrap(controllers.EventController.create))
router.get('/topics', jwtAuth(), wrap(controllers.TopicController.getAll))
router.get('/health', wrap(controllers.HealthController.health))
router.delete('/placeholders', jwtAuth(), wrap(controllers.PlaceholderController.clearAll))

// version routes
router.post(`/${config.API_VERSION}/events`, jwtAuth(), wrap(controllers.EventController.create))
router.get(`/${config.API_VERSION}/topics`, jwtAuth(), wrap(controllers.TopicController.getAll))
router.get(`/${config.API_VERSION}/health`, wrap(controllers.HealthController.health))
router.delete(`/${config.API_VERSION}/placeholders`, jwtAuth(), wrap(controllers.PlaceholderController.clearAll))

module.exports = router
