! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, thresholds, at, until, operator, warning, error, critical) {
buf.push("<form" + (jade.attr("id", "form-" + (id) + "", true, false)) + " class=\"row threshold-form clearfix\"><div class=\"cell col-sm-2\"><select id=\"at\" name=\"at\" class=\"form-control\">");
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

buf.push("</select></div><div class=\"cell col-sm-2\"><select id=\"until\" name=\"until\" class=\"form-control\">");
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

buf.push("</select></div><div class=\"cell col-sm-4\"><div class=\"row\"><div class=\"col-sm-6\"><span class=\"operator-text\">when the <b>ErrorSystem</b></span></div><div class=\"col-sm-6 pl0\"><select id=\"operator\" name=\"operator\" class=\"form-control\">");
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

buf.push("</select></div></div></div><div class=\"cell col-sm-3 alert-column\"><div class=\"row show\"><div class=\"col-sm-5 pr0\"><input id=\"warning\" type=\"text\" name=\"warning\"" + (jade.attr("value", "" + (warning) + "", true, false)) + " class=\"form-control alert-input\"/></div><div class=\"col-sm-7 pl0\"><label class=\"trigger-text-container trigger-warning-text\"><span class=\"trigger-text\">trigger a warning</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div><div class=\"row\"><div class=\"col-sm-5 pr0\"><input id=\"error\" type=\"text\" name=\"error\"" + (jade.attr("value", "" + (error) + "", true, false)) + " class=\"form-control alert-input\"/></div><div class=\"col-sm-7 pl0\"><label class=\"trigger-text-container trigger-error-text\"><span class=\"trigger-text\">trigger a error</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div><div class=\"row\"><div class=\"col-sm-5 pr0\"><input id=\"critical\" type=\"text\" name=\"critical\"" + (jade.attr("value", "" + (critical) + "", true, false)) + " class=\"form-control alert-input\"/></div><div class=\"col-sm-7 pl0\"><label class=\"trigger-text-container trigger-critical-text\"><span class=\"trigger-text\">trigger a critical</span><i class=\"fa fa-exclamation-triangle\"></i></label></div></div></div><div class=\"cell col-sm-1\"><i title=\"Delete Threshold\" class=\"fa fa-trash-o fa-lg delete hide\"></i></div></form>");}("id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"thresholds" in locals_for_with?locals_for_with.thresholds:typeof thresholds!=="undefined"?thresholds:undefined,"at" in locals_for_with?locals_for_with.at:typeof at!=="undefined"?at:undefined,"until" in locals_for_with?locals_for_with.until:typeof until!=="undefined"?until:undefined,"operator" in locals_for_with?locals_for_with.operator:typeof operator!=="undefined"?operator:undefined,"warning" in locals_for_with?locals_for_with.warning:typeof warning!=="undefined"?warning:undefined,"error" in locals_for_with?locals_for_with.error:typeof error!=="undefined"?error:undefined,"critical" in locals_for_with?locals_for_with.critical:typeof critical!=="undefined"?critical:undefined));;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/dashboard/threshold.html", ["js/lib/jade", "i18n!pages/home/dashboard/nls/threshold"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/dashboard/threshold"]= jadify(wndw.jade.helpers);
}(window));