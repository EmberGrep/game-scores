import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://game-scores.herokuapp.com/games/${params.gameId}`)
      .then((response) => response.json())
      .then((response) => {
        const scores = response.data.relationships.scores;
        return {
          game: response.data,
          scores: Promise.all(scores.map((score) => fetch(`https://game-scores.herokuapp.com/game-scores/${score.id}`)
            .then((res) => res.json())
            .then((res) => res.data))),
        };
      });
  }
});
