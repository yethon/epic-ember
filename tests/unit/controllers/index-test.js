import { moduleFor, test } from 'ember-qunit';
import FlashObject from '../../helpers/flash-message';
import FakeKinveyObject from '../../helpers/fake-kinvey';


var fakeKinveyService = new FakeKinveyObject();
var fakeFlashMessages = FlashObject;

moduleFor('controller:index', 'Unit | Controller | index', {

  beforeEach: function() {
    fakeFlashMessages = {clearMessages: () => {}};
  }
});

test('pingKinvey action displays successful message if kinvey response is good', function(assert) {
  assert.expect(2);

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

  fakeKinveyService.set('resolveSuccessfully', false);

  let controller = this.subject({
    flashMessages: fakeFlashMessages,
    kinveyService: fakeKinveyService
  });

  let pingKinveyAction = controller.get('_actions.pingKinvey');

  pingKinveyAction.call(controller);
});
