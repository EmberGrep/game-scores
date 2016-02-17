import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  score: DS.attr(),

  game: DS.belongsTo('game'),
});
