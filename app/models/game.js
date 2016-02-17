import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),

  scores: DS.hasMany('game-score'),
});
