import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // add a new user
  this.route('user');
  // display all users
  this.route('users');
});

export default Router;
