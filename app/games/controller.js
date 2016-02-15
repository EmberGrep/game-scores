import Ember from 'ember';
const { set } = Ember;

export default Ember.Controller.extend({
  addNewGame(game) {
    const currentGames = this.model;

    set(this, 'model', [...currentGames, game]);
    set(this, 'newGameName', '');
  }
});
