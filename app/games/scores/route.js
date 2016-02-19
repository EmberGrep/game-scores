import Ember from 'ember';
const { hash, all } = Ember.RSVP;

export default Ember.Route.extend({
  actions: {
    saveNewScore(game, resetForm, formValues) {
      const score = this.store.createRecord('game-score', formValues);
      score.set('game', game);

      score.save().then(() => {
        resetForm();
      });
    }
  }
});
