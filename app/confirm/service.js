import Ember from 'ember';

export default Ember.Service.extend({
  resolve: null,
  reject: null,
  message: '',

  create(message) {
    return new Promise((resolve, reject) => {
      this.setProperties({message, resolve, reject});
    });
  }
});
