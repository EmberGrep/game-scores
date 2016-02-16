import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://game-scores.herokuapp.com/games/${params.gameId}`)
      .then((res) => res.json())
      .then((res) => res.data);
  }
});
