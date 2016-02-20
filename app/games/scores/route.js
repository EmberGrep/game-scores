import Ember from 'ember';
const { hash, all } = Ember.RSVP;

export default Ember.Route.extend({
  confirm: Ember.inject.service(),

  actions: {
    saveNewScore(game, resetForm, formValues) {
      const score = this.store.createRecord('game-score', formValues);
      score.set('game', game);

      score.save().then(() => {
        resetForm();
      });
    },

    deleteScore(score) {
      this.get('confirm').create('Do you really want to delete this score?')
        .then(() => score.destroyRecord())
        .catch(() => {});
    }
  }
});
