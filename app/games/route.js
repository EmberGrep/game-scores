import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://game-scores.herokuapp.com/games')
      .then((response) => response.json())
      .then((response) => response.data);
  }
});
