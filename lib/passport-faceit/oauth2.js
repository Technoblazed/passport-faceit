/**
 * Module dependencies.
 */
const util = require('util');
const OAuth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://cdn.faceit.com/widgets/sso/index.html';
  options.tokenURL = options.tokenURL || 'https://api.faceit.com/auth/v1/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'faceit';

  this._oauth2.setAuthMethod('OAuth');
  this._oauth2.useAuthorizationHeaderforGET(true);
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function(accessToken, done) {
  done(null, {});
};

Strategy.prototype.authorizationParams = function(options) {
  return {
    redirect_popup: true
  };
};

module.exports = Strategy;
