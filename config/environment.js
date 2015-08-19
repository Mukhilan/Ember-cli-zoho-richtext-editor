/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zoho-editor-component',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' https://js.zohostatic.com http://js.zohostatic.com",
      'img-src': "'self' https://css.zohostatic.com http://css.zohostatic.com",
      'style-src': "'self' 'unsafe-inline' http://css.zohostatic.com https://css.zohostatic.com",
      'media-src': "'self'"
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
