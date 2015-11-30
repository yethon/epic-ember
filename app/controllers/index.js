import Ember from 'ember';
// ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
// One day, controllers will be deprecated. When that day comes, you will have routable components
// and you will be able to use closure actions on routes. You will then move this action up to a route.
export default Ember.Controller.extend({
  flashMessages: Ember.get(this,'flashMessages'),
  kinveyService: Ember.get(this, 'kinveyService'),

  actions: {
    pingKinvey: function() {
      this.get('flashMessages').clearMessages();

      this.get('kinveyService').ping()
      .then((response) => {
        let message = `Kinvey says: ${response.kinvey}, this is version ${response.version}`;
        this.get('flashMessages').success(message, {timeout: 10000});
      })
      .catch((err) => {
        this.get('flashMessages').danger('Kinvey did a bad thing : (⊙_◎)');
        console.warn(err); // handleError(err);
      });
    }
  }
});
