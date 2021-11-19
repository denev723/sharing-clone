"use strict";
(function ($, console) {
  if (!console.log) {
    console.log = function () {};
  }

  $.lnb = {};

  $.extend($.lnb, {
    defaults: {
      hoverDelay: 500,
      overBodyClass: "lnb-over",
      overClass: "over",
      overObjs: null,
      onOver: null,
      onOverGetDepth2MaxHeight: null
    },
    setDefaults: function (options) {
      $.extend($.modalBox.defaults, options);
    }
  });

  $.fn.lnb = function (options) {
    var config = $.extend(true, {}, $.lnb.defaults, options);
    var body = $("body");

    return this.each(function () {
      var $lnb = $(this);
      var parentsUlCount = $lnb.parents("ul").size();

      $lnb.on("mouseover", "a", function () {
        var $item = $(this).parent();
        console.log($item);
      });
    });
  };

  function setTimeoutFn() {
    clearTimeoutFn();

    $lnb.data(
      "timeout",
      setTimeout(function () {
        if (config.overBodyClass) {
          $body.removeClass(config.overBodyClass);
        }

        if (config.overClass) {
          var $otherOverItems = $lnb.find("li." + config.overClass);
          $otherOverItems.removeClass(config.overClass);
        }

        if (typeof config.onOut === "function") {
          config.onOut();
        }
      })
    );
  }

  function clearTimeoutFn() {
    var timeout = $lnb.data("timeout");

    if (timeout) {
      clearTimeout(timeout);
    }
  }
})(jQuery, window.console);
