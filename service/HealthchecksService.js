'use strict';


/**
 * Check API is healthy.
 * Check API is healthy. 
 *
 * returns HealthCheckStatus
 **/
exports.getHealth = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "health" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get only response status and headers information but no response body for the endpoint. 
 * Get response status and headers information for the endpoint. It does not contain response body. 
 *
 * no response value expected for this operation
 **/
exports.headHealth = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

