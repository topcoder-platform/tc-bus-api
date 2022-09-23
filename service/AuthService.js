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
  let secret = config.get('AUTH_SECRET')
  let validIssuers = JSON.parse(config.get('VALID_ISSUERS'))

  if (!secret || secret.length === 0) {
    throw new Error('Auth secret not provided')
  }

  if (!validIssuers || validIssuers.length === 0) {
    throw new Error('JWT Issuers are not configured')
  }

  let authVerifier = verifier(validIssuers)

  return function (req, authOrSecDef, scopesOrApiKey, callback) {
    if (!!scopesOrApiKey && scopesOrApiKey.indexOf('Bearer') === 0) {
      const token = scopesOrApiKey.split('Bearer ')[1]

      authVerifier.validateToken(token, secret, (err, decoded) => {
        let scopes

        if (err) {
          err.statusCode = NOT_AUTHORIZED
          return callback(err)
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

        scopes = _.find(decoded, (value, key) => {
          return (key.indexOf('scope') !== -1)
        })

        if (scopes) {
          decoded.scopes = scopes.split(' ')

          let grantType = _.find(decoded, (value, key) => {
            return (key.indexOf('gty') !== -1)
          })
          if (grantType === 'client-credentials' &&
            !decoded.userId &&
            !decoded.roles) {
            decoded.isMachine = true
          }
        }

        req.swagger.params.authUser = decoded

        callback()
      })
    } else {
      const error = new Error('You are not authorized to access this resource')
      error.statusCode = NOT_AUTHORIZED
      logger.info(error)
      callback(error)
    }
  }
}
