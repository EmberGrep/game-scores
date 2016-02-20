import Ember from 'ember';

export default Ember.Component.extend({
  confirm: Ember.inject.service(),

  actions: {
    reject() {
      this.get('confirm.reject')();
      this.set('confirm.reject', null);
      this.set('confirm.resolve', null);
      this.set('confirm.message', null);
    },

    resolve() {
      this.get('confirm.resolve')();
      this.set('confirm.reject', null);
      this.set('confirm.resolve', null);
      this.set('confirm.message', null);
    },
  }
});
