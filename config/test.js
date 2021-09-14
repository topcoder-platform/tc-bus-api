require('dotenv').config()
module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  AUTH0_URL: process.env.AUTH0_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH_V2_URL: process.env.AUTH_V2_URL,
  AUTH_V2_CLIENT_ID: process.env.AUTH_V2_CLIENT_ID,
  AUTH_V3_URL: process.env.AUTH_V3_URL,
  ADMIN_CREDENTIALS_USERNAME: process.env.ADMIN_CREDENTIALS_USERNAME,
  ADMIN_CREDENTIALS_PASSWORD: process.env.ADMIN_CREDENTIALS_PASSWORD,
  MANAGER_CREDENTIALS_USERNAME: process.env.ADMIN_CREDENTIALS_USERNAME,
  MANAGER_CREDENTIALS_PASSWORD: process.env.ADMIN_CREDENTIALS_PASSWORD,
  COPILOT_CREDENTIALS_USERNAME: process.env.COPILOT_CREDENTIALS_USERNAME,
  COPILOT_CREDENTIALS_PASSWORD: process.env.COPILOT_CREDENTIALS_PASSWORD,
  USER_CREDENTIALS_USERNAME: process.env.USER_CREDENTIALS_USERNAME,
  USER_CREDENTIALS_PASSWORD: process.env.USER_CREDENTIALS_PASSWORD,
  AUTOMATED_TESTING_SITE_PREFIX: process.env.AUTOMATED_TESTING_SITE_PREFIX || 'http://localhost:3000/v5',
  WAIT_TIME: process.env.WAIT_TIME || 6000,
  AUTOMATED_TESTING_REPORTERS_FORMAT: process.env.AUTOMATED_TESTING_REPORTERS_FORMAT
    ? process.env.AUTOMATED_TESTING_REPORTERS_FORMAT.split(',')
    : ['cli', 'html']
}
