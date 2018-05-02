/**
 * The default configuration.
 */
module.exports = {
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT ? process.env.KAFKA_CLIENT_CERT.replace('\\n', '\n') : null,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY ? process.env.KAFKA_CLIENT_CERT_KEY.replace('\\n', '\n') : null,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  CONTEXT_PATH: process.env.API_VERSION || '/eventbus/',
  PORT: process.env.PORT || '3000',
  authSecret: process.env.JWT_TOKEN_SECRET,
  authDomain: process.env.AUTH_DOMAIN,
  validIssuers: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '') : null,
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '',
  JWT_TOKEN_EXPIRES_IN: process.env.JWT_TOKEN_EXPIRES_IN || '100 days',
  KAFKA_TOPIC_PREFIX: process.env.KAFKA_TOPIC_PREFIX || '',
  ALLOWED_SERVICES: process.env.ALLOWED_SERVICES || ['project-service', 'message-service'],
  TC_EMAIL_SERVICE_URL: process.env.TC_EMAIL_SERVICE_URL,
  TC_EMAIL_SERVICE_TOKEN: process.env.TC_EMAIL_SERVICE_TOKEN,
  TC_EMAIL_SERVICE_CACHE_PERIOD: process.env.TC_EMAIL_SERVICE_CACHE_PERIOD || (3600 * 1000),
  
  // Configuration for generating machine to machine auth0 token.
  // The token will be used for calling another internal API.
  auth0Url: process.env.auth0Url || '',
  auth0Audience: process.env.auth0Audience || '',
  // The token will be cached.
  // We define the time period of the cached token.
  tokenCacheTime: process.env.tokenCacheTime || 86400000,
  auth0CliendId: process.env.auth0CliendId,
  auth0CliendSecret: process.env.auth0CliendSecret,
}
