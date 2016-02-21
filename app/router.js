import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', { path: '/' }, function() {
    this.route('scores', { path: '/:game_id' }, function() {
      this.route('edit', {
        path: '/:game-score_id/edit'
      });
    });

    this.route('edit', {
      path: '/:game_id/edit'
    });
  });
  this.route('l');
});

export default Router;
