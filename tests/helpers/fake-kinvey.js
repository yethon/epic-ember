import Ember from 'ember';
const Promise = Ember.RSVP.Promise;
const {
  K,
  Object: EmberObject } = Ember;

  export default EmberObject.extend({
    resolveSuccessfully: true,
    userDataObject: {},
    init: K,
    ping: function() {
      let kinveyCallBack = new Promise(function(resolve, reject) {
        // on success
        resolve({
          kinvey: 'howdy',
          version: '1'
        });
        // on failure
        reject('Kinvey says: OOPS, my BAD!');
      });

      if(this.resolveSuccessfully){
        return Promise.resolve(kinveyCallBack);
      } else {
        return Promise.reject(kinveyCallBack);
      }
    },
    getUsers: function () {
      let kinveyCallBack = new Promise(function(resolve, reject) {
        let err = {
          name: 'CASH_MONEY',
          description: 'ALL_WHAMMYS'
        };
        // on success
        resolve(this.userDataObject);
        // on failure
        reject(err);
      });

      if(this.resolveSuccessfully){
        return Promise.resolve(kinveyCallBack);
      } else {
        return Promise.reject(kinveyCallBack);
      }
    }
  });
