const config = require('config')
const { verifier } = require('tc-core-library-js').auth
const _ = require('lodash')
const logger = require('../common/logger')

const NOT_AUTHORIZED = 401

/**
 * Function body is similar to tc-core-library-js
 * jwt auth middleware. That function is expressjs specific
 * and thus using the modified version here specific for
 * swagger code gen
 */
module.exports = function () {
  const secret = config.get('AUTH_SECRET')
  const validIssuers = JSON.parse(config.get('VALID_ISSUERS'))

  if (!secret || secret.length === 0) {
    throw new Error('Auth secret not provided')
  }

  if (!validIssuers || validIssuers.length === 0) {
    throw new Error('JWT Issuers are not configured')
  }

  const authVerifier = verifier(validIssuers)

  return function (req, authOrSecDef, scopesOrApiKey, next) {
    if (!!scopesOrApiKey && scopesOrApiKey.indexOf('Bearer') === 0) {
      const token = scopesOrApiKey.split('Bearer ')[1]

      try {
        authVerifier.validateToken(token, secret, (err, decoded) => {
          if (err || !decoded) {
            err.statusCode = NOT_AUTHORIZED
            const error = new Error('You are not authorized to access this resource')
            return next(error)
          }
          decoded.userId = _.parseInt(_.find(decoded, (value, key) => {
            return (key.indexOf('userId') !== -1)
          }))
          decoded.handle = _.find(decoded, (value, key) => {
            return (key.indexOf('handle') !== -1)
          })
          decoded.roles = _.find(decoded, (value, key) => {
            return (key.indexOf('roles') !== -1)
          })

          const scopes = _.find(decoded, (value, key) => {
            return (key.indexOf('scope') !== -1)
          })

          if (scopes) {
            decoded.scopes = scopes.split(' ')

            const grantType = _.find(decoded, (value, key) => {
              return (key.indexOf('gty') !== -1)
            })
            if (grantType === 'client-credentials' &&
              !decoded.userId &&
              !decoded.roles) {
              decoded.isMachine = true
            }
          }

          req.swagger.params.authUser = decoded

          return next()
        })
      } catch (e) {
        logger.error(e)
        return next(e)
      }
    } else {
      const error = new Error('You are not authorized to access this resource')
      error.statusCode = NOT_AUTHORIZED
      logger.info(error)
      return next(error)
    }
  }
}
