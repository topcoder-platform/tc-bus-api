/**
 * Clear the postman test data. All data created by postman e2e tests will be cleared.
 */
 const logger = require('../../common/logger')
 const helper = require('./envHelper')
 const config = require('config')
 
 /**
   * Clear the postman test data. The main function of this class.
   * @returns {Promise<void>}
   */
 async function clearTestData () {
   logger.info('Clear the Postman test data.')
   await helper.postRequest(`${config.AUTOMATED_TESTING_SITE_PREFIX}/internal/jobs/clean`)
     .then(() => {
       logger.info('Completed!')
       process.exit()
     }).catch((e) => {
       logger.logFullError(e)
       process.exit(1)
     })
 }
 clearTestData()
 