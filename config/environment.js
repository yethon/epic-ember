/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'epic-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    // These values are unique to your app. They are TOP SECRET, and don't belong in github （＊〇□〇）……！
    // You need to set these values in each environment where you run your app
    // Set the values locally in your profile `~/.bash_profile` or `~/.zsh_profile`
    // Set the values in a deployed environment via your .travis.yml file
    KINVEY_EPIC_EMBER_APP_ID: process.env.KINVEY_EPIC_EMBER_APP_ID,
    KINVEY_EPIC_EMBER_APP_SECRET: process.env.KINVEY_EPIC_EMBER_APP_SECRET,

    contentSecurityPolicy: {
      'connect-src': "'self' https://baas.kinvey.com", // Allow data (ajax/websocket) from Kinvey
      'default-src': "'none'",
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'script-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
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
