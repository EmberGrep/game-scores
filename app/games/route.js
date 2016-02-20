import Ember from 'ember';

export default Ember.Route.extend({
  confirm: Ember.inject.service('confirm'),

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
      this.get('confirm').create('Do you really want to delete this game?')
        .then(() => game.destroyRecord())
        .catch(() => {});
    }
  }
});
