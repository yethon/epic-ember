import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

var Promise = Ember.RSVP.Promise;
var resolve = Ember.RSVP.resolve;
var reject = Ember.RSVP.reject;

var fakeKinveyService = {};
var fakeFlashMessages = {};

moduleFor('controller:index', 'Unit | Controller | index', {
  needs: ['service:flashMessages', 'service:kinveyService'],

  beforeEach: function() {
    fakeFlashMessages = {clearMessages: function () {}};
    // TODO Can you make fakeKinveyService dryer?
  }
});

test('pingKinvey action displays successful message if kinvey response is good', function(assert) {
  assert.expect(2);

  fakeKinveyService = {
    ping: function () {
      let kinveyCallBack = new Promise(function(resolve, reject) {
        // on success
        resolve({
          kinvey: 'howdy',
          version: '1'
        });
        // on failure
        reject('Kinvey says: OOPS, my BAD!');
      });

      return resolve(kinveyCallBack);
    }
  };

  fakeFlashMessages.success = function (message) {
    assert.ok(true, 'success function called!');
    assert.equal(message, 'Kinvey says: howdy, this is version 1', 'Success message created');
  };

  fakeFlashMessages.danger = function () {
    // If the following assertion is executed, your test FAILS
    assert.ok(false, 'The danger message was triggered');
  };

  let controller = this.subject({
    flashMessages: fakeFlashMessages,
    kinveyService: fakeKinveyService
  });

  let pingKinveyAction = controller.get('_actions.pingKinvey');

  pingKinveyAction.call(controller);
});

test('pingKinvey action shows an error if kinvey response is bad', function(assert) {
  assert.expect(2);

  fakeFlashMessages.success = function () {
    // If the following assertion is executed, your test FAILS
    assert.ok(false, 'The success message was triggered');
  };

  fakeFlashMessages.danger = function (message) {
    assert.ok(true, 'danger function called!');
    assert.equal(message, 'Kinvey did a bad thing : (⊙_◎)', 'Danger message created');
  };

  fakeKinveyService = {
    ping: function () {
      let kinveyCallBack = new Promise(function(resolve, reject) {
        // on success
        resolve({
          kinvey: 'howdy',
          version: '1'
        });
        // on failure
        reject('Kinvey says: OOPS, my BAD!');
      });

      return reject(kinveyCallBack);
    }
  };

  let controller = this.subject({
    flashMessages: fakeFlashMessages,
    kinveyService: fakeKinveyService
  });

  let pingKinveyAction = controller.get('_actions.pingKinvey');

  pingKinveyAction.call(controller);
});
