import Ember from 'ember';
const { set } = Ember;

export default Ember.Controller.extend({
  resetForm() {
    set(this, 'newGameName', '');
  }
});
