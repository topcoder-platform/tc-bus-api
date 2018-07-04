/**
 * The default configuration.
 */
module.exports = {
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT ? process.env.KAFKA_CLIENT_CERT.replace('\\n', '\n') : null,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY ? process.env.KAFKA_CLIENT_CERT_KEY.replace('\\n', '\n') : null,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  CONTEXT_PATH: process.env.API_VERSION || '/eventbus/',
  PORT: process.env.PORT || '3000',
  AUTH_SECRET: process.env.JWT_TOKEN_SECRET,
  VALID_ISSUERS: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '') : null,
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '',
  JWT_TOKEN_EXPIRES_IN: process.env.JWT_TOKEN_EXPIRES_IN || '100 days',
  ALLOWED_SERVICES: process.env.ALLOWED_SERVICES || ['project-service', 'message-service'],
  TC_EMAIL_SERVICE_URL: process.env.TC_EMAIL_SERVICE_URL,
  TC_EMAIL_SERVICE_CACHE_PERIOD: process.env.TC_EMAIL_SERVICE_CACHE_PERIOD || (3600 * 1000),

  // Configuration for generating machine to machine auth0 token.
  // The token will be used for calling another internal API.
  AUTH0_URL: process.env.AUTH0_URL || '',
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || '',
  // The token will be cached.
  // We define the time period of the cached token.
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME || 86400000,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_Secret: process.env.AUTH0_CLIENT_SECRET,
  SCOPES: {
    "writeBusApi": "write:bus_api",
    "readBusTopics": "read:bus_topics"
  }
}
