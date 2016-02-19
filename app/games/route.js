import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    saveNewGame(toggleForm, formValues) {
      const game = this.store.createRecord('game', formValues);

      game.save()
        .then(() => {
          toggleForm();
        });
    }
  }
});
