/**
 * The Health check service.
 */
const tracer = require('../common/tracer')
const helper = require('../common/helper')

/**
 * Check API is healthy.
 *
 * @param {Object} parentSpan the parent Span object
 * @returns health check status
 */
async function getHealth (parentSpan) {
  const childSpan = tracer.startChildSpans('HealthchecksService.getHealth', parentSpan)
  try {
    const examples = {}
    examples['application/json'] = {
      'health': 'ok'
    }
    if (Object.keys(examples).length > 0) {
      return examples[Object.keys(examples)[0]]
    }
  } finally {
    childSpan.finish()
  }
}

/**
 * Head API health.
 *
 * @param {Object} parentSpan the parent Span object
 */
async function headHealth (parentSpan) {
  const childSpan = tracer.startChildSpans('HealthchecksService.headHealth', parentSpan)
  childSpan.finish()
}

module.exports = {
  getHealth,
  headHealth
}

helper.buildService(module.exports)
