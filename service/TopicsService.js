/**
 * Topics service.
 */
const tracer = require('../common/tracer')
const helper = require('../common/helper')

/**
 * Head topics
 *
 * @param {Object} parentSpan the parent Span object
 */
async function headTopics (parentSpan) {
  const childSpan = tracer.startChildSpans('TopicsService.headTopics', parentSpan)
  childSpan.finish()
}

module.exports = {
  headTopics
}

helper.buildService(module.exports)
