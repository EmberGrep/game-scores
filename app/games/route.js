import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      'Mario Kart',
      'Donkey Kong',
      'Mortal Kombat',
    ];
  }
});
