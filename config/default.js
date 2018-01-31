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
  jwksUri: process.env.jwksUri,
  validIssuers: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '') : null,
  KAFKA_TOPIC_PREFIX: process.env.KAFKA_TOPIC_PREFIX || 'joan-26673.notifications.',
  ALLOWED_SERVICES: ['project-service', 'message-service']
}
