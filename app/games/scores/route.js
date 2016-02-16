import Ember from 'ember';
const { hash, all } = Ember.RSVP;

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://game-scores.herokuapp.com/games/${params.gameId}`)
      .then((res) => res.json())
      .then((res) => {
        const scores = res.data.relationships.scores.data;
        return hash({
          game: res.data,
          scores: all(scores.map((score) => {
            return fetch(`https://game-scores.herokuapp.com/game-scores/${score.id}`)
              .then((res) => res.json())
              .then((res) => res.data);
          })),
        });
      });
  }
});
