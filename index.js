/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-easy-wizard',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/ember-hash-helper-polyfill/dist/ember-hash-helper-polyfill.js');
  }
};
