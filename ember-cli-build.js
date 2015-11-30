/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Might as well look nice - am I right?
  app.import('app/styles/skeleton.css');
  app.import('app/styles/normalize.css');

  // Where is kinvey-ember.js ? The kinvey source for TestDrive-Ember is from March 2014!
  // Let's use this...
  app.import('bower_components/kinvey/kinvey-html5.js');

  return app.toTree();
};
