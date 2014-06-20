! function () {
  var Tooltips = function ($, LucidJS, _, DataAttributes) {
    var ESCAPE = 27,
      _private = {
        defaults: {
          "bind.open": "mouseenter focusin",
          "bind.close": "mouseleave focusout",
          "bind.keydown": "keydown",
          "animate.in.type": "custom",
          "animate.in.from": '{"opacity":0}',
          "animate.in.to": '{"opacity":0.8}',
          "animate.in.duration": 200,
          "animate.out.type": "custom",
          "animate.out.from": '{"opacity":0.8}',
          "animate.out.to": '{"opacity":0}',
          "animate.out.duration": 200,
          position: "top",
          style: "tooltip",
          "style.z-index": 1e6,
          offset: 10,
          "attribute.tooltip": "data-tooltip"
        },
        tooltip: $("<div>").attr("aria-role", "tooltip"),
        getTooltip: function (el, options) {
          var tooltip = $(el).data("tooltip.me");
          if (tooltip && tooltip.constructor == Tooltip.prototype.constructor)
            if (_private.build.call(tooltip, options ? options.text : null), options) return tooltip.customize(options);
            else return tooltip;
            else return null
        },
        makeTooltip: function (el, settings) {
          var $el = $(el),
            tooltip = _private.getTooltip($el);
          if (!tooltip) tooltip = new Tooltip($el, settings), $el.data("tooltip.me", tooltip);
          return _private.build.call(tooltip, settings ? settings.text : null), tooltip
        },
        monitorKeys: function (e) {
          if (e.keyCode == ESCAPE) this.close()
        },
        show: function () {
          this.emitter.trigger("show", this)
        },
        close: function () {
          this.$tooltip.hide().remove(), this.emitter.trigger("close", this)
        },
        build: function (_text) {
          var arrow = $("<div>").addClass(this.options.style + "-arrow"),
            inner = $("<div>").addClass(this.options.style + "-inner"),
            text = _text || this.$el.attr(this.options["attribute.tooltip"]);
          this.$tooltip = _private.tooltip.empty().remove().removeClass().stop(!0, !0).addClass(this.options.style).addClass(this.options.position).css({
            visibility: "hidden",
            position: "absolute",
            display: "block",
            "z-index": this.options["style.z-index"]
          }).append(arrow).append(inner.html(text))
        }
      }, Tooltip = function (el, settings) {
        this.$el = $(el), this.customize(settings), this.emitter = LucidJS.emitter(this)
      };
    Tooltip.prototype.customize = function (settings) {
      if (this.options = _.extend({}, DataAttributes.parse(this.$el, _private.defaults, "data-tooltip-"), settings), this.options.offset) this.options.offset = parseInt(this.options.offset, 10) || 0;
      return this
    }, Tooltip.prototype.open = function () {
      var that = this,
        position = this.$el.offset(),
        position2 = this.$tooltip.appendTo("body").offset(),
        width = this.$el.outerWidth(),
        height = this.$el.outerHeight(),
        width2 = this.$tooltip.outerWidth(),
        height2 = this.$tooltip.outerHeight(),
        middleW = position.left + width / 2,
        middleH = position.top + height / 2;
      if ("top" == this.options.position) this.$tooltip.css({
        left: middleW - width2 / 2,
        top: position.top - height2 - this.options.offset
      });
      else if ("left" == this.options.position) this.$tooltip.css({
        left: position.left - width2 - this.options.offset,
        top: middleH - height2 / 2
      });
      else if ("right" == this.options.position) this.$tooltip.css({
        left: position.left + width + this.options.offset,
        top: middleH - height2 / 2
      });
      else this.$tooltip.css({
        left: middleW - width2 / 2,
        top: position.top + height + this.options.offset
      }); if ("custom" == this.options["animate.in.type"]) {
        if (this.options["animate.in.from"])
          if (_.isObject(this.options["animate.in.from"])) this.$tooltip.css(this.options["animate.in.from"]);
          else
        if (_.isString(this.options["animate.in.from"])) this.$tooltip.css($.parseJSON(this.options["animate.in.from"]));
        if (this.$tooltip.css({
          visibility: "visible",
          display: "block"
        }), this.options["animate.in.to"])
          if (_.isObject(this.options["animate.in.to"])) this.$tooltip.animate(this.options["animate.in.to"], {
            duration: this.options["animate.in.duration"],
            complete: _.bind(_private.show, this)
          });
          else
        if (_.isString(this.options["animate.in.to"])) this.$tooltip.animate($.parseJSON(this.options["animate.in.to"]), {
          duration: this.options["animate.in.duration"],
          complete: _.bind(_private.show, this)
        })
      } else this.emitter.trigger("opening", this), this.$tooltip.css({
        display: "block"
      }), _private.show.call(this);
      return $(document).on(this.options["bind.keydown"] + ".popup", _.bind(_private.monitorKeys, this)), this
    }, Tooltip.prototype.close = function () {
      if ("custom" == this.options["animate.out.type"]) {
        if (this.options["animate.out.from"])
          if (_.isObject(this.options["animate.out.from"])) this.$tooltip.css(this.options["animate.out.from"]);
          else
        if (_.isString(this.options["animate.out.from"])) this.$tooltip.css($.parseJSON(this.options["animate.out.from"]));
        if (this.options["animate.out.to"])
          if (_.isObject(this.options["animate.out.to"])) this.$tooltip.animate(this.options["animate.out.to"], {
            duration: this.options["animate.out.duration"],
            complete: _.bind(_private.close, this)
          });
          else
        if (_.isString(this.options["animate.out.to"])) this.$tooltip.animate($.parseJSON(this.options["animate.out.to"]), {
          duration: this.options["animate.out.duration"],
          complete: _.bind(_private.close, this)
        });
        this.emitter.trigger("closing", this)
      } else this.emitter.trigger("closing", this), _private.close.call(this)
    };
    var external = function () {
      return _private.getTooltip.apply(null, arguments) || _private.makeTooltip.apply(this, arguments)
    };
    return external.start = function (view, _options) {
      var $view = $(view),
        options = _.extend({}, _private.defaults, _options);
      $view.on(options["bind.open"] + ".tooltip", "[" + options["attribute.tooltip"] + "]", function (e) {
        var $anchor = $(this);
        if ("disabled" != $anchor.attr("disabled")) {
          options = _.extend({}, _options, DataAttributes.parse($anchor, _private.defaults, "data-tooltip-"));
          var tooltip = _private.makeTooltip($anchor, options);
          if ($anchor.attr(options["attribute.tooltip"])) tooltip.open(), tooltip.on("open", function () {
            $anchor.data("tooltip.it", tooltip)
          }), tooltip.on("close", function () {
            $anchor.data("tooltip.it", null)
          })
        }
      }), $view.on(options["bind.close"] + ".tooltip", "[" + options["attribute.tooltip"] + "]", function (e) {
        var $anchor = $(this);
        options = _.extend({}, _options, DataAttributes.parse($anchor, _private.defaults, "data-tooltip-"));
        var tooltip = _private.getTooltip($anchor, options);
        if (tooltip) tooltip.close()
      })
    }, external.stop = function (view) {
      var $view = $(view),
        pop = $view.data("tooltip.it");
      if ($view.off(".tooltip"), tooltip) tooltip.close()
    }, external.start("body"), external
  };
  if ("function" == typeof define && define.amd) define(["jquery", "js/lib/lucid", "underscore", "js/lib/data.attributes"], function ($, LucidJS, _, DataAttributes) {
    return Tooltips($, LucidJS, _, DataAttributes)
  });
  else if ("undefined" != typeof window && "undefined" == typeof ender) window.Tooltip = Tooltips(window.$, window.LucidJS, window._, window.DataAttributes)
}();