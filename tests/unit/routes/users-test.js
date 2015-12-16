import { moduleFor, test } from 'ember-qunit';
import FlashObject from '../../helpers/flash-message';
import FakeKinveyObject from '../../helpers/fake-kinvey';

var fakeKinveyService = new FakeKinveyObject();
var fakeFlashMessages = FlashObject;

moduleFor('route:users', 'Unit | Route | users', {
  beforeEach: function() {
    fakeFlashMessages = {clearMessages: () => {}};
  }
});

test('it exists', function(assert) {
  assert.expect(1);

  let route = this.subject();
  assert.ok(route);
});

test('flash message and rerouting when kinvey getUsers fails', function(assert) {
  assert.expect(2);

  fakeFlashMessages.success = function () {
    // If the following assertion is executed, your test FAILS
    assert.ok(false, 'The success message was triggered');
  };

  fakeFlashMessages.danger = function () {
    assert.ok(true, 'danger function called!');
  };

  fakeKinveyService.set('resolveSuccessfully', false);

  let route = this.subject({
    flashMessages: fakeFlashMessages,
    kinveyService: fakeKinveyService,
    routing: {
      transitionTo: function(location){
        assert.equal(location, 'application', 'transitioned back to application route');
      }}
  });

  route.model(); });
