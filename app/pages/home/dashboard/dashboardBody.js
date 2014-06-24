define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/readme',
  'js/app/home',
  'js/models/threshold',
  'js/views/threshold',
  'js/views/thresholdTimechart',
  'js/collections/thresholds',
  'js/lib/util',
  'pages/home/dashboard/dashboardBody.html',
  'pages/home/template/body'
], function ($, _, Backbone, ReadMe, Tmpst, Threshold, ThresholdView, ThresholdTimechartView, ThresholdsList, Util, DashboardTpl, BodyView) {
  'use strict';

  var ESCAPE = 27;
  var ENTER = 13;
  var DashboardBodyView = BodyView.extend({
    dom: {
      CREATE_THRESHOLD: '.create-threshold',
      THRESHOLD_CONTAINER: '#thresholds-container .row-group',
      THRESHOLD_FORM: '#threshold-form',
      THRESHOLD_TIMECHART_CONTAINER: '#thresholds-timechart .timechart-group'
    },
    initialize: function () {
      BodyView.prototype.initialize.call(this, arguments);

      $('body').on('keydown.threshold, click.threshold', this.removeFocus.bind(this));
      this.listenTo(this, 'view:appended', this.showReadME);
      // act as internal anchor,  pass the 'section' into the view, and use JS to jump to that part of the view, post-rendering
      var that = this;
      this.on('view:merged', function (options) {
        if (options && options.section) {
          Util.scrollToInternalLink(that.$el, options.section);
        } else {
          window.scrollTo(0, 0);
        }
      });

      this.thresholdsList = new ThresholdsList();

      this.listenTo(this.thresholdsList, 'add', this.addOne);
      this.listenTo(this.thresholdsList, 'reset', this.addAll);
      this.listenTo(this.thresholdsList, 'sort', this.sort);
    },
    render: function () {
      this.$el.html(DashboardTpl({
        thresholds: Tmpst.config.thresholds
      }));

      var models = [];

      _.forEach(Tmpst.config.thresholds.sampleData, function (item) {
        models.push(
          new Threshold(item)
        );
      });

      this.thresholdsList.reset(models);

      return this;
    },
    events: function () {
      var events = {};

      events['click ' + this.dom.CREATE_THRESHOLD] = 'onCreateThreshold';

      return events;
    },
    onCreateThreshold: function () {
      var attrs = {};
      _.each(this.$(this.dom.THRESHOLD_FORM).serializeArray(), function (item) {
        attrs[item.name] = item.value;
      });

      this.thresholdsList.create(attrs, {
        wait: true,
        validate: true // make validate method is called before **set**
      });
    },
    addOne: function (threshold) {
      var index = ~~this.thresholdsList.models.indexOf(threshold);

      threshold.set('index', index);
      threshold.set('id', Util.guid()); //should be generated by server, this is a fake here
      var thresholdView = new ThresholdView({
        model: threshold
      });

      this.$(this.dom.THRESHOLD_CONTAINER).append(thresholdView.render().el);
      this.$(this.dom.THRESHOLD_FORM).get(0).reset();


      var thresholdTimechartView = new ThresholdTimechartView({
        model: threshold
      });

      this.$(this.dom.THRESHOLD_TIMECHART_CONTAINER).append(thresholdTimechartView.render().el);
    },
    addAll: function () {
      this.$(this.dom.THRESHOLD_CONTAINER).html('');
      this.$(this.dom.THRESHOLD_TIMECHART_CONTAINER).html('');
      this.thresholdsList.each(this.addOne, this);
    },
    sort: function () {
      this.addAll();
    },
    removeFocus: function (e) {
      if (e.keyCode === ESCAPE) {
        this.render();
      }
    }
  });

  return DashboardBodyView;
});