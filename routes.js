/**
 * Configure application routes.
 */
const {Router} = require('express')
const requireDir = require('require-dir')
const jwtAuth = require('tc-core-library-js').middleware.jwtAuthenticator

const router = Router()
const controllers = requireDir('./controllers')

// Async error handling
const wrap = fn => (...args) => fn(...args).catch(args[2])

// Routes
router.post('/events', jwtAuth(), wrap(controllers.EventController.create))
router.get('/topics', jwtAuth(), wrap(controllers.TopicController.getAll))
router.get('/health', wrap(controllers.HealthController.health))
router.delete('/placeholders', jwtAuth(), wrap(controllers.PlaceholderController.clearAll))

module.exports = router
