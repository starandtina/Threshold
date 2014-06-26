! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (thresholds, at, until, operator) {
buf.push("<h2 data-section=\"create\" class=\"label\">CREATE THRESHOLD<form id=\"threshold-form\" role=\"form\" class=\"form-horizontal\"><fieldset><div class=\"form-group\"><label for=\"at\" class=\"col-sm-2 control-label\">AT</label><div class=\"col-sm-4\"><select name=\"at\" id=\"at\" class=\"form-control time\">");
// iterate thresholds.timeRange
;(function(){
  var $$obj = thresholds.timeRange;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var t = $$obj[$index];

if ( t == at)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var t = $$obj[$index];

if ( t == at)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
    }

  }
}).call(this);

buf.push("</select></div></div><div class=\"form-group\"><label for=\"until\" class=\"col-sm-2 control-label\">UNTIL</label><div class=\"col-sm-4\"><select name=\"until\" id=\"until\" class=\"form-control time\">");
// iterate thresholds.timeRange
;(function(){
  var $$obj = thresholds.timeRange;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var t = $$obj[$index];

if ( t == until)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var t = $$obj[$index];

if ( t == until)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (t) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = t) ? "" : jade_interp)) + "</option>");
}
    }

  }
}).call(this);

buf.push("</select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">WHEN</label><div class=\"col-sm-4\"><select name=\"operator\" class=\"col-md-4 form-control\">");
// iterate thresholds.operator
;(function(){
  var $$obj = thresholds.operator;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var val = $$obj[key];

if ( key == operator)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (key) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (key) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</option>");
}
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var val = $$obj[key];

if ( key == operator)
{
buf.push("<option selected=\"selected\"" + (jade.attr("value", "" + (key) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</option>");
}
else
{
buf.push("<option" + (jade.attr("value", "" + (key) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = val) ? "" : jade_interp)) + "</option>");
}
    }

  }
}).call(this);

buf.push("</select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\"></label><div class=\"col-sm-2\"><input type=\"text\" name=\"warning\" class=\"form-control\"/></div><div class=\"col-sm-4\"><label class=\"trigger-text-container trigger-warning-text\"><span class=\"trigger-text\">trigger a warning</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\"></label><div class=\"col-sm-2\"><input type=\"text\" name=\"error\" class=\"form-control\"/></div><div class=\"col-sm-4\"><label class=\"trigger-text-container trigger-error-text\"><span class=\"trigger-text\">trigger a error</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\"></label><div class=\"col-sm-2\"><input type=\"text\" name=\"critical\" class=\"form-control\"/></div><div class=\"col-sm-4\"><label class=\"trigger-text-container trigger-critical-text\"><span class=\"trigger-text\">trigger a critical</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div><div class=\"form-group\"><div class=\"col-sm-offset-2 col-sm-10\"><a class=\"btn btn-default create-threshold\"><i class=\"fa fa-plus\">CREATE</i></a></div></div><div class=\"form-group\"><div class=\"validation-error col-sm-offset-2 col-sm-10\"></div></div></fieldset></form></h2>");}("thresholds" in locals_for_with?locals_for_with.thresholds:typeof thresholds!=="undefined"?thresholds:undefined,"at" in locals_for_with?locals_for_with.at:typeof at!=="undefined"?at:undefined,"until" in locals_for_with?locals_for_with.until:typeof until!=="undefined"?until:undefined,"operator" in locals_for_with?locals_for_with.operator:typeof operator!=="undefined"?operator:undefined));;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/dashboard/thresholdCreate.html", ["js/lib/jade", "i18n!pages/home/dashboard/nls/thresholdCreate"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/dashboard/thresholdCreate"]= jadify(wndw.jade.helpers);
}(window));