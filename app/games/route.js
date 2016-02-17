import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    saveNewGame(name, ev) {
      const game = this.store.createRecord('game', { name });

      game.save()
        .then(() => {
          this.controller.resetForm();
        });

      ev.preventDefault();
    }
  }
});
