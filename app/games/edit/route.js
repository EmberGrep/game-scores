import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    updateGame(game, formValues) {
      game.setProperties(formValues);

      game.save().then(() => {
        this.get('flashMessages').success(`Game "${game.get('name')}" updated.`);
        this.transitionTo('games.scores', game);
      });
    }
  }
});
