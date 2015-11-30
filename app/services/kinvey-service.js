/*globals Kinvey*/
import Ember        from 'ember';

var on = Ember.on;

export default Ember.Service.extend({
  kinveyAPI: null,

  afterInitialization: on('init', function() {
    if(!Kinvey) {
      throw new Error("ERROR ::: The Kinvey library did not load successfully!");
    } else {
      this.set('kinveyAPI', Kinvey);
    }
  }),

  ping: function () {
    return this.get('kinveyAPI').ping();
  }

  // create something!
});
