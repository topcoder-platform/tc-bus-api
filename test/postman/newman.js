const config = require('config')
const apiTestLib = require('tc-api-testing-lib')
const envHelper = require('./envHelper')
const logger = require('../../common/logger')

const healthCheckRequests = [
  {
    folder: 'health check'
  },
  {
    folder: 'health check headers'
  }
]

const serviceRequests = [
  {
    folder: 'create service successfully',
    iterationData: require('./testData/service/create-service-successfully.json')
  },
  {
    folder: 'create service by invalid token',
    iterationData: require('./testData/service/create-service-by-invalid-token.json')
  },
  {
    folder: 'create service by missing field',
    iterationData: require('./testData/service/create-service-by-missing-field.json')
  },
  {
    folder: 'create service by invalid field',
    iterationData: require('./testData/service/create-service-by-invalid-field.json')
  },
  {
    folder: 'get all services successfully',
    iterationData: require('./testData/service/get-all-services-successfully.json')
  },
  {
    folder: 'get all services by invalid token',
    iterationData: require('./testData/service/get-all-services-by-invalid-token.json')
  },
  {
    folder: 'get all services by invalid parameter',
    iterationData: require('./testData/service/get-all-services-by-invalid-parameter.json')
  },
  {
    folder: 'get all services headers successfully',
    iterationData: require('./testData/service/get-all-services-headers-successfully.json')
  },
  {
    folder: 'get all services headers by invalid token',
    iterationData: require('./testData/service/get-all-services-headers-by-invalid-token.json')
  },
  {
    folder: 'get all services headers by invalid parameter',
    iterationData: require('./testData/service/get-all-services-headers-by-invalid-parameter.json')
  },
  {
    folder: 'get services successfully',
    iterationData: require('./testData/service/get-services-successfully.json')
  },
  {
    folder: 'get services by invalid token',
    iterationData: require('./testData/service/get-services-by-invalid-token.json')
  },
  {
    folder: 'get services headers successfully',
    iterationData: require('./testData/service/get-services-headers-successfully.json')
  },
  {
    folder: 'get services headers by invalid token',
    iterationData: require('./testData/service/get-services-headers-by-invalid-token.json')
  },
  {
    folder: 'update service successfully',
    iterationData: require('./testData/service/update-service-successfully.json')
  },
  {
    folder: 'update service by invalid token',
    iterationData: require('./testData/service/update-service-by-invalid-token.json')
  },
  {
    folder: 'update service by missing field',
    iterationData: require('./testData/service/update-service-by-missing-field.json')
  },
  {
    folder: 'update service by invalid field',
    iterationData: require('./testData/service/partially-update-service-by-invalid-field.json')
  },
  {
    folder: 'partially update service successfully',
    iterationData: require('./testData/service/partially-update-service-successfully.json')
  },
  {
    folder: 'partially update service by invalid token',
    iterationData: require('./testData/service/partially-update-service-by-invalid-token.json')
  },
  {
    folder: 'partially update service by invalid field',
    iterationData: require('./testData/service/partially-update-service-by-invalid-field.json')
  },
  {
    folder: 'delete service successfully',
    iterationData: require('./testData/service/delete-service-successfully.json')
  },
  {
    folder: 'delete service by invalid token',
    iterationData: require('./testData/service/delete-service-by-invalid-token.json')
  },
  {
    folder: 'create service payload successfully',
    iterationData: require('./testData/service/create-service-payload-successfully.json')
  },
  {
    folder: 'create service payload by invalid token',
    iterationData: require('./testData/service/create-service-payload-by-invalid-token.json')
  },
  {
    folder: 'create service payload by missing field',
    iterationData: require('./testData/service/create-service-payload-by-missing-field.json')
  },
  {
    folder: 'create service payload by invalid field',
    iterationData: require('./testData/service/create-service-payload-by-invalid-field.json')
  },
  {
    folder: 'get all payloads successfully',
    iterationData: require('./testData/service/get-all-payloads-successfully.json')
  },
  {
    folder: 'get all payloads by invalid token',
    iterationData: require('./testData/service/get-all-payloads-by-invalid-token.json')
  },
  {
    folder: 'get all payloads by invalid parameter',
    iterationData: require('./testData/service/get-all-payloads-by-invalid-parameter.json')
  },
  {
    folder: 'get all payloads headers successfully',
    iterationData: require('./testData/service/get-all-payloads-headers-successfully.json')
  },
  {
    folder: 'get all payloads headers by invalid token',
    iterationData: require('./testData/service/get-all-payloads-headers-by-invalid-token.json')
  },
  {
    folder: 'get all payloads headers by invalid parameter',
    iterationData: require('./testData/service/get-all-payloads-headers-by-invalid-parameter.json')
  },
  {
    folder: 'get payloads successfully',
    iterationData: require('./testData/service/get-payloads-successfully.json')
  },
  {
    folder: 'get payloads by invalid token',
    iterationData: require('./testData/service/get-payloads-by-invalid-token.json')
  },
  {
    folder: 'get payloads headers successfully',
    iterationData: require('./testData/service/get-payloads-headers-successfully.json')
  },
  {
    folder: 'get payloads headers by invalid token',
    iterationData: require('./testData/service/get-payloads-headers-by-invalid-token.json')
  },
  {
    folder: 'update service payload successfully',
    iterationData: require('./testData/service/update-service-payload-successfully.json')
  },
  {
    folder: 'update service payload by invalid token',
    iterationData: require('./testData/service/update-service-payload-by-invalid-token.json')
  },
  {
    folder: 'update service payload by missing field',
    iterationData: require('./testData/service/update-service-payload-by-missing-field.json')
  },
  {
    folder: 'update service payload by invalid field',
    iterationData: require('./testData/service/update-service-payload-by-invalid-field.json')
  },
  {
    folder: 'partially update service payload successfully',
    iterationData: require('./testData/service/partially-update-service-payload-successfully.json')
  },
  {
    folder: 'partially update service payload by invalid token',
    iterationData: require('./testData/service/partially-update-service-payload-by-invalid-token.json')
  },
  {
    folder: 'partially update service payload by invalid field',
    iterationData: require('./testData/service/partially-update-service-payload-by-invalid-field.json')
  },
  {
    folder: 'delete service payload successfully',
    iterationData: require('./testData/service/delete-service-payload-successfully.json')
  },
  {
    folder: 'delete service payload by invalid token',
    iterationData: require('./testData/service/delete-service-payload-by-invalid-token.json')
  }
]

const eventsRequests = [
  {
    folder: 'post event successfully',
    iterationData: require('./testData/events/post-event-successfully.json')
  },
  {
    folder: 'post event by invalid token',
    iterationData: require('./testData/events/post-event-by-invalid-token.json')
  },
  {
    folder: 'post event by missing field',
    iterationData: require('./testData/events/post-event-by-missing-field.json')
  },
  {
    folder: 'post event by invalid field',
    iterationData: require('./testData/events/post-event-by-invalid-field.json')
  }
]

const topicsRequests = [
  {
    folder: 'get topics successfully',
    iterationData: require('./testData/topics/get-topics-successfully.json')
  },
  {
    folder: 'get topics by invalid token',
    iterationData: require('./testData/topics/get-topics-by-invalid-token.json')
  },
  {
    folder: 'get topics headers successfully',
    iterationData: require('./testData/topics/get-topics-headers-successfully.json')
  },
  {
    folder: 'get topics headers by invalid token',
    iterationData: require('./testData/topics/get-topics-headers-by-invalid-token.json')
  }
]

const placeholderRequests = [
  {
    folder: 'delete placeholders successfully',
    iterationData: require('./testData/placeholders/delete-placeholders-successfully.json')
  },
  {
    folder: 'delete placeholders by invalid token',
    iterationData: require('./testData/placeholders/delete-placeholders-by-invalid-token.json')
  }
]

const requests = [
  ...healthCheckRequests,
  ...serviceRequests,
  ...eventsRequests,
  ...topicsRequests,
  ...placeholderRequests
]

/**
 * Clear the test data.
 * @return {Promise<void>}
 */
async function clearTestData () {
  logger.info('Clear the Postman test data.')
  await envHelper.postRequest(`${config.AUTOMATED_TESTING_SITE_PREFIX}/internal/jobs/clean`)
  logger.info('Finished clear the Postman test data.')
}

/**
 * Run the postman tests.
 */
apiTestLib.runTests(requests, require.resolve('./bus-api.postman_collection.json'),
  require.resolve('./bus-api.postman_environment.json')).then(async () => {
  logger.info('newman test completed!')
  await clearTestData()
}).catch(async (err) => {
  logger.error(err)

  // Only calling the clean up function when it is not validation error.
  if (err.name !== 'ValidationError') {
    await clearTestData()
  }
})
