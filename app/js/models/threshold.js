define([
  'underscore',
  'backbone',
  'js/app/home',
  'js/lib/backbone.api'
], function (_, Backbone, Tmpst, BackboneModelAPI) {
  'use strict';

  var Instance = Backbone.Model.extend({
    defaults: {
      at: null,
      util: null,
      operator: null,
      alert: null
    },
    api: Tmpst.api,
    url: '/thresholds',
    validation: {
      at: {
        required: true
      },
      util: {
        required: true,
      },
      operator: {
        required: true,
      },
      warning: {
        pattern: 'number'
      },
      error: {
        pattern: 'number'
      },
      critical: {
        pattern: 'number'
      }
    },
    initialize: function () {
      this.listenTo(this, 'validated', this.handleError);
    },
    handleError: function (isValid, model, errorList) {
      var errorMsg = '';

      if (!isValid) {
        errorMsg = _.map(errorList, function (error) {
          return '✗ ' + error;
        }).join('<br/>');
      }

      $('.validation-error').html(errorMsg);
    },
    labels: {
      'alert': 'Alerts'
    }
  });

  //_.extend(Instance.prototype, BackboneModelAPI);

  return Instance;
});