import Ember from 'ember';
import layout from '../templates/components/easy-wizard';

export default Ember.Component.extend({
  tagName: 'div',

  setupEasyWizard: Ember.on('didInsertElement', function() {
    layout;
  }),

  teardownEasyWizard: Ember.on('willDestroyElement', function() {
    this.get('easyWizard').destroy();
  })
});
