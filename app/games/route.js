import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://game-scores.herokuapp.com/games')
      .then((response) => response.json())
      .then((response) => response.data);
  },

  actions: {
    saveNewGame(name, ev) {
      const body = {
        data: {
          type: 'games',
          attributes: {
            name
          }
        }
      };

      fetch('https://game-scores.herokuapp.com/games', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((response) => {
          this.controller.addNewGame(response.data);
        });

      ev.preventDefault();
    }
  }
});
