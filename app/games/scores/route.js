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
        this.get('flashMessages').success(`${score.get('username')}'s score created.`);
      });
    },

    deleteScore(score) {
      const username = score.get('username');
      this.get('confirm').create('Do you really want to delete this score?')
        .then(() => score.destroyRecord())
        .then(() => {
          this.get('flashMessages').success(`${username}'s score deleted.`);
        })
        .catch(() => {});
    }
  }
});
