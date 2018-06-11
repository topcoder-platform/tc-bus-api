'use strict';


/**
 * Get topics.
 * Get all topic names. 
 *
 * returns List
 **/
exports.getTopics = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "notifications.kafka.queue.java.test", "example.kafka.queue.java.test" ];
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
exports.headTopics = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

