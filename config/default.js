/**
 * The default configuration.
 */
module.exports = {
    KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT ? process.env.KAFKA_CLIENT_CERT.replace('\\n', '\n') : null,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY ? process.env.KAFKA_CLIENT_CERT_KEY.replace('\\n', '\n') : null,
  ALLOWED_SERVICES: ['project-service','message-service'],
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  CONTEXT_PATH: process.env.API_VERSION || '/eventbus/',
  PORT: process.env.PORT || '3000',
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || 'JWT_TOKEN_SECRET',
  JWT_TOKEN_EXPIRES_IN: process.env.JWT_TOKEN_EXPIRES_IN || '100 days',
  KAFKA_TOPIC_PREFIX: process.env.KAFKA_TOPIC_PREFIX || 'joan-26673.notifications.'
}
