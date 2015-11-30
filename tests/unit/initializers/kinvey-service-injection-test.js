import Ember from 'ember';
import KinveyServiceInjectionInitializer from '../../../initializers/kinvey-service-injection';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | kinvey service injection', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  let container = {};
  KinveyServiceInjectionInitializer.initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
