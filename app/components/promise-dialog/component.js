import Ember from 'ember';

export default Ember.Component.extend({
  service: Ember.inject.service('dialog'),

  promise: Ember.computed.alias('service.promise'),
  resolve: Ember.computed.alias('service.resolve'),
  reject: Ember.computed.alias('service.reject'),
  options: Ember.computed.alias('service.options'),
});
