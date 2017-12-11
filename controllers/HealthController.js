/**
 * Contains endpoints related to service health
 */
'use strict';

/**
 * Health Check.
 * @param req the request
 * @param res the response
 */
function health(req, res, next) {
  res.json({health: 'ok'});
  next();
}

// Exports
module.exports = {
  health
};