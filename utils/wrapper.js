const logger = require('../common/logger')

function functionWrapper(fn, fnName) {
  return async function () {
    try {
      const span = await logger.startSpan(fnName ?? fn.name)
      const result = await fn.apply(this, arguments);
      await logger.endSpan(span)
      return result
    } catch (e) {
      await logger.endSpanWithError(span, err)
      return e
    }
  };
}

module.exports = {
  functionWrapper
}
logger.buildService(module.exports)