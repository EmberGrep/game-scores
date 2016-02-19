import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },

  actions: {
    saveNewGame(afterSave, formValues) {
      debugger;
      const game = this.store.createRecord('game', formValues);

      game.save()
        .then(() => {
          afterSave();
        });
    }
  }
});
