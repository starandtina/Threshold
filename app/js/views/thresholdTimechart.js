define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/util',
  'js/app/home',
  'pages/home/dashboard/thresholdTimechart.html'
], function ($, _, Backbone, Util, Tmpst, ThresholdTimechartTpl) {
  'use strict';

  var ESCAPE = 27;
  var ENTER = 13;
  var ThresholdTimechartView = Backbone.View.extend({
    attributes: {
      class: 'row'
    },
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function (options) {
      var timeCharts = [];
      var at = this.model.get('at');
      var until = this.model.get('until');
      var timeRange = this._computeTime(at, until);

      // we need add two charts here
      if (at > until) {
        var first = _.first(Tmpst.config.thresholds.timeRange);
        var last = _.last(Tmpst.config.thresholds.timeRange);

        timeRange = this._computeTime(at, last);
        timeCharts.push(this._getMetric(timeRange.at, timeRange.range));

        timeRange = this._computeTime(first, until);
        timeCharts.push(this._getMetric(parseInt(first, 10), timeRange.range));
      } else {
        timeCharts.push(this._getMetric(timeRange.at, timeRange.range));
      }

      var data = this.model.toJSON();

      options = options || {};
      this.$el.html(ThresholdTimechartTpl(_.extend(data, options, {
        timeCharts: timeCharts
      })));

      return this;
    },
    _computeTime: function (at, until) {
      var atResult = at.match(/(\d{2})\:(\d{2})/i);
      var untilResult = until.match(/(\d{2})\:(\d{2})/i);

      var atHour = atResult[1];
      var atMin = atResult[2];
      var untilHour = untilResult[1];
      var untilMin = untilResult[2];

      return {
        at: Number(atHour) + atMin / 60,
        range: (untilHour - atHour) + (untilMin - atMin) / 60
      };
    },
    _getMetric: function (at, range) {
      var m = {};
      var colors = Tmpst.config.thresholds.colors;
      var minTimeWidth = parseFloat(100 / 12.0 / 4).toFixed(4);
      var index = this.model.get('index');

      m.marginLeftWidth = at * 2 * minTimeWidth + '%';
      m.width = range * 2 * minTimeWidth + '%';
      m.top = '-60px';
      m.classes = ['time-block'];
      m.classes.unshift('bg-' + colors[this.model.get('index') % colors.length]);

      return m;
    }
  });

  return ThresholdTimechartView;
});