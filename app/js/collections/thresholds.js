define([
  'jquery',
  'underscore',
  'backbone',
  'js/app/home',
  'js/models/threshold',
  'js/lib/backbone.api'
], function ($, _, Backbone, Tmpst, Threshold, BackboneModelAPI, LocalStorage) {
  'use strict';

  var InstanceList = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('tmpst'),
    model: Threshold,
    api: Tmpst.api,
    url: '/thresholds',
    comparator: 'at'
  });

  //InstanceList.prototype.sync = BackboneModelAPI.sync;

  return InstanceList;
});