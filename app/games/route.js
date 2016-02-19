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
    },

    deleteGame(game) {
      if (window.confirm('Do you really want to delete this game?')) {
        game.destroyRecord();
      }
    }
  }
});
