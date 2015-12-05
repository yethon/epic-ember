import Ember from 'ember';

export default Ember.Component.extend({
  firstName: '',
  lastName:  '',
  userName:  '',
  email:     '',
  password:  '',

  actions: {
    submitUser() {
      let firstName = this.get('firstName');
      let lastName  = this.get('lastName');
      let userName  = this.get('userName');
      let email     = this.get('email');
      let password  = this.get('password');

      // What's next? Send data to Kinvey to update your user list!
      alert(firstName + ' ' + lastName + ' ' + userName + ' ' + email + ' ' + password );
    }
  }
});
