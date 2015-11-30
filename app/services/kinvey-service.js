/*globals Kinvey*/
import Ember from 'ember';
import ENV   from "../config/environment";


var on = Ember.on;

export default Ember.Service.extend({
  kinveyAPI:       null,

  kinveyAppID:     null,
  kinveyAppSecret: null,

  afterInitialization: on('init', function() {
    Ember.assert('The Kinvey library did not load successfully!', !!Kinvey);
    this.set('kinveyAPI', Kinvey);

    // These don't classify as an error, because you can still have fun pinging
    // the Kinvey service before you actually set up an app
    // see ../config/environment.js for more info about these variables
    this.set('kinveyAppID', ENV.KINVEY_EPIC_EMBER_APP_ID);
    this.set('kinveyAppID', ENV.KINVEY_EPIC_EMBER_APP_SECRET);
  }),

  ping: function () {
    return this.get('kinveyAPI').ping();
  }

  // create something!
});
