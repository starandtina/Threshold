define([
  'jquery',
  'underscore',
  'js/lib/moment',
  'js/app/home'
], function ($, _, Moment, Tmpst) {

  function scrollToInternalLink($dom, section) {
    var $target = $dom.find('[data-section="' + section + '"]');
    if ($target.length) {
      var newTop = $target.position().top;
      var scrollDiff = Math.abs($(document).scrollTop() - newTop);
      if (scrollDiff > 1e3) {
        $('html, body').scrollTop(newTop);
      } else {
        $('html,body').animate({
          scrollTop: newTop
        });
      }
      if (Tmpst.multitracker) {
        Tmpst.multitracker.push([document.title.split(' |')[0] + ' ' + section, 'Open']);
      }
    }
  }

  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  // Generate a pseudo-GUID by concatenating random hexadecimal.
  function guid() {
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  };



  return {
    moment: Moment,
    scrollToInternalLink: scrollToInternalLink,
    guid: guid
  }
});