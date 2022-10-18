/**
 * The default configuration.
 */
require('dotenv').config()
module.exports = {
  KAFKA_URL: process.env.KAFKA_URL || 'localhost:9092',
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT ? process.env.KAFKA_CLIENT_CERT.replace('\\n', '\n') : null,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY ? process.env.KAFKA_CLIENT_CERT_KEY.replace('\\n', '\n') : null,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || '3000',
  AUTH_SECRET: process.env.JWT_TOKEN_SECRET,
  VALID_ISSUERS: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '') : null,
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '',
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
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  SCOPES: {
    writeBusApi: 'write:bus_api',
    readBusTopics: 'read:bus_topics'
  },

  // Logger configuration
  APM_OTLP_TRACE_EXPORTER_URL: process.env.APM_OTLP_TRACE_EXPORTER_URL || '',
  APM_SERVICE_NAME: process.env.APM_SERVICE_NAME || 'tc-bus-api-svc',
  APM_TRACER_NAME: process.env.APM_TRACER_NAME || 'tc-bus-api-svc',

  // bypass auth
  BYPASS_AUTH: process.env.BYPASS_AUTH || false
}
