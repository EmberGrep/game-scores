import Ember from 'ember';

export default Ember.Route.extend({
  confirm: Ember.inject.service('confirm'),
  flashMessages: Ember.inject.service(),

  model() {
    return this.store.findAll('game');
  },

  actions: {
    saveNewGame(toggleForm, formValues) {
      const game = this.store.createRecord('game', formValues);

      game.save()
        .then(() => {
          toggleForm();
          this.get('flashMessages').success(`Game "${game.get('name')}" created.`);
        });
    },

    deleteGame(game) {
      const name = game.get('name');

      this.get('confirm').create('Do you really want to delete this game?')
        .then(() => game.destroyRecord())
        .then(() => {
          this.get('flashMessages').success(`Game "${name}" deleted.`);
        })
        .catch(() => {});
    }
  }
});
