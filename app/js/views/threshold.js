define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/util',
  'js/app/home',
  'pages/home/dashboard/threshold.html'
], function ($, _, Backbone, Util, Tmpst, ThresholdTpl) {
  'use strict';

  var ESCAPE = 27;
  var ENTER = 13;
  var ThresholdView = Backbone.View.extend({
    attributes: {
      class: 'table-row'
    },
    bindings: function () {
      var bindings = {};

      _.chain(this.model.attributes).keys().each(function (attr) {
        bindings['#' + attr] = attr;
      });

      return bindings;
    },
    initialize: function () {
      this.listenTo(this.model, 'change:at', this.changeAt);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function (options) {
      var data = this.model.toJSON();

      options = options || {};
      this.$el.html(ThresholdTpl(_.extend(data, options, {
        thresholds: Tmpst.config.thresholds
      })));

      this.stickit();

      var colors = Tmpst.config.thresholds.colors;
      this.$('form').addClass('bl-' + colors[this.model.get('index') % colors.length]);

      return this;
    },
    events: function () {
      var events = {};

      events['click'] = 'onEdit';
      events['keydown'] = 'onKeydown';
      events['click .delete'] = 'onDelete';

      return events;
    },
    onEdit: function (event) {
      if (this.$el.hasClass('edit-row')) {
        return false;
      }

      this.$el.siblings().each(function (index, row) {
        var $row = $(row);

        $row.find('input, select').blur();
        $row.removeClass('edit-row');
        $row.find('.delete').removeClass('show');
      });

      this.$el.addClass('edit-row');
      this.$('.delete').addClass('show');

      var target = event.target;
      var nodeName = target.nodeName.toUpperCase();

      if (nodeName !== 'SELECT' && nodeName !== 'INPUT') {
        this.$('#at').focus();
      }

      this.$('.alert-column .row').filter(function () {
        return $(this).css('display') === 'none';
      }).each(function () {
        $(this).slideDown();
      });
    },
    onKeydown: function (e) {
      if (e.keyCode === ESCAPE) {
        //reset
        this.render();
        this.removeFocus();

        return false;
      } else if (e.keyCode === ENTER) {
        this.save();
        this.removeFocus();

        return false;
      }
    },
    save: function () {
      var attrs = {};
      this.$('.delete').removeClass('show');
      this.$('.alert-column input').each(function (i, input) {
        var $input = $(input);

        if ($input.val() === '') {
          $input.parents('.row').first().slideUp();
        }
      });
    },
    removeFocus: function () {
      this.$el.find('input, select').blur();
      this.$el.removeClass('edit-row');
    },
    onDelete: function () {
      this.model.destroy();
    },
    changeAt: function () {
      this.model.collection.sort();
    }
  });

  return ThresholdView;
});