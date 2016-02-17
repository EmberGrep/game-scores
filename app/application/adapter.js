import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://game-scores.herokuapp.com',
});
