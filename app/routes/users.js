import Ember from 'ember';

export default Ember.Route.extend({
  kinveyService: Ember.get(this, 'kinveyService'),
  flashMessages: Ember.get(this,'flashMessages'),
  routing: Ember.inject.service('-routing'),

  model() {
    return this.get('kinveyService').getUsers()
    .then((responseData) => {
      return {users: responseData };
    })
    .catch((err) => {
      let message = `Error: ${err.name}, ${err.description}`;
      this.get('flashMessages').danger(message, {timeout: 10000});
      // if you can't get user data, go back to main page!
      this.get('routing').transitionTo('application');
    });
  }
});
