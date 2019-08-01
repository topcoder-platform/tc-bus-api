const _ = require('lodash')

// Dictionary of active tracers
const tracers = {}

/**
 * Composite class.
 * Holds multiple spans in order to provide single interface to interact with them
 */
class Spans {
  constructor () {
    this.spans = {}
  }

  /**
   * Adds span into container
   * @param {String} tracerName Name of tracer service. Must be initialized
   * @param {Object} span Span object to handle
   */
  addSpan (tracerName, span) {
    this.spans[tracerName] = span
  }

  /**
   * Adds tag to all known spans
   * @param {String} name Tag name
   * @param {Any} value Tag value
   */
  setTag (name, value) {
    Object.values(this.spans).forEach(span => span.setTag(name, value))
  }

  /**
   * Executes log for all known spans
   * @param {Object} log Log object
   */
  log (log) {
    Object.values(this.spans).forEach(span => span.log(log))
  }

  /**
   * Finish all spans
   */
  finish () {
    Object.values(this.spans).forEach(span => span.finish())
  }
}

/**
 * Initializes one or more tracing services
 * @param {Object} config Tracing config. Please see available options in README
 */
function initTracing (config) {
  // Read global options and exclude 'dataDogEnabled' 'lightStepEnabled' 'signalFXEnabled' 'dataDog' 'lightStep' 'signalFX'
  const globalOptions = _.omit(config, 'dataDogEnabled', 'lightStepEnabled', 'signalFXEnabled', 'dataDog', 'lightStep', 'signalFX')

  if (config.has('dataDogEnabled') && config.get('dataDogEnabled') === true) {
    const options = config.has('dataDog') ? config.get('dataDog') : {}
    tracers['datadog'] = require('dd-trace').init(Object.assign(options, globalOptions))
  }

  if (config.has('lightStepEnabled') && config.get('lightStepEnabled') === true) {
    const options = config.has('lightStep') ? config.get('lightStep') : {}
    const ls = require('lightstep-tracer')

    tracers['lightstep'] = new ls.Tracer(Object.assign(options, globalOptions))
  }

  if (config.has('signalFXEnabled') && config.get('signalFXEnabled') === true) {
    const options = config.has('signalFX') ? config.get('signalFX') : {}
    tracers['signalFX'] = require('signalfx-tracing')
      .init(Object.assign(options, globalOptions))
  }
}

/**
 * Starts spans for all initialized tracing services
 * @param {String} name Span name
 */
function startSpans (name) {
  const spans = new Spans()

  Object.keys(tracers).map(tracerName => {
    spans.addSpan(tracerName, tracers[tracerName].startSpan(name))
  })

  return spans
}

/**
 * Initializes child spans with specified parent spans
 * @param {String} name Span name
 * @param {Object} parentSpans Spans object
 */
function startChildSpans (name, parentSpans) {
  const spans = new Spans()

  for (const tracerName in parentSpans.spans) {
    spans.addSpan(tracerName, tracers[tracerName].startSpan(name, {
      childOf: parentSpans.spans[tracerName]
    }))
  }

  return spans
}

module.exports = {
  initTracing,
  startSpans,
  startChildSpans
}
