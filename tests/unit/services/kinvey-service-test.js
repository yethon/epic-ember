import { moduleFor, test } from 'ember-qunit';

moduleFor('service:kinvey-service', 'Unit | Service | kinvey service', {
});

test('The Kinvey API gets set after initialization', function(assert) {
  assert.expect(1);
  // fake global Kinvey API object
  window.Kinvey = {};

  let service = this.subject();

  assert.ok(service.get('kinveyAPI'), 'The kinvey API object is set');
});

test('ping returns KinveyAPI ping callback', function(assert) {
  assert.expect(1);

  window.Kinvey = {
    ping: function () {
      return 'Ping was successful!' ;
    }
  };

  let service = this.subject();
  let result = service.ping();

  assert.equal(result, 'Ping was successful!', 'The kinvey API ping was successful');
});
