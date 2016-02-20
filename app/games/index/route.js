import Ember from 'ember';

export default Ember.Route.extend({
  dialog: Ember.inject.service('dialog'),

  actions: {
    showDialog() {
      this.get('dialog').createDialog({ type: 'confirm', message: 'Are you sure' })
        .then(() => { alert('Resolved'); }, () => { alert('Rejected'); });
    },
  },
});
