import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateScore(score, formValues) {
      score.setProperties(formValues);

      score.save().then(() => {
        this.get('flashMessages').success(`${score.get('username')}'s score updated.`);
        this.transitionTo('games.scores', score.get('game'));
      });
    }
  }
});
