$(document).ready(function () {
  var links = $("a[href='javascript:void(0)']");
  $.each(links, function (index, item) {
    item.addEventListener("click", function () {
      alert("준비중입니다.");
    });
  });

  var searchBg = $(".search-box > .content-bg");
  var bgHeight = $(".search-box > .content-wrapper").outerHeight();
  searchBg.css("height", bgHeight);

  var categoryHeight = $(".main-category > .category-list").outerHeight();
  var categoryBg = $(".main-category > .category-wrapper");
  categoryBg.css("height", categoryHeight);

  $(".search-box-handle").on("click", function () {
    if (!$(".search-box").hasClass("on")) {
      $(".search-box").addClass("on");
      $(".search-box").scrollTop(0);
      $("body").addClass("on");
    } else {
      $(".search-box").removeClass("on");
      $("body").removeClass("on");
    }
  });

  searchBg.on("click", function () {
    if ($(".search-box").hasClass("on")) {
      $(".search-box").removeClass("on");
      $("body").removeClass("on");
    }
  });

  var sitemapOpen = $("a[href='#sitemap-open']");
  var sitemapClose = $("a[href='#sitemap-close']");
  sitemapOpen.on("click", function () {
    if (!$(".sitemap").hasClass("on")) {
      $(".sitemap").addClass("on");
      $("body").addClass("on");
    }
  });

  sitemapClose.on("click", function () {
    if ($(".sitemap").hasClass("on")) {
      $(".sitemap").removeClass("on");
      $("body").removeClass("on");
    }
  });

  $(".sitemap-bg").on("click", function () {
    if ($(".sitemap").hasClass("on")) {
      $(".sitemap").removeClass("on");
      $("body").removeClass("on");
    }
  });

  $(".category-btn").on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });

  $(window).resize(function () {
    if (1250 < $(window).width() && $(window).width() < 1400) {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 700) {
          if ($(".page-main .search-box").css("position") !== "fixed") {
            $(".page-main .search-box")
              .css({
                position: "fixed",
                height: "100%",
                overflow: "scroll"
              })
              .scrollTop(700);
          }
        } else {
          $(".page-main .search-box").css({
            position: "absolute",
            height: "",
            overflow: ""
          });
        }
      });
    } else if ($(window).width() > 1400) {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 365) {
          if ($(".page-main .search-box").css("position") !== "fixed") {
            $(".page-main .search-box")
              .css({
                position: "fixed",
                height: "100%",
                overflow: "scroll"
              })
              .scrollTop(365);
          }
        } else {
          $(".page-main .search-box").css({
            position: "absolute",
            height: "",
            overflow: ""
          });
        }
      });
    }
  });

  if (1250 < $(window).width() && $(window).width() < 1400) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 700) {
        if ($(".page-main .search-box").css("position") !== "fixed") {
          $(".page-main .search-box")
            .css({
              position: "fixed",
              height: "100%",
              overflow: "scroll"
            })
            .scrollTop(700);
        }
      } else {
        $(".page-main .search-box").css({
          position: "absolute",
          height: "",
          overflow: ""
        });
      }
    });
  } else if ($(window).width() > 1400) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() >= 365) {
        if ($(".page-main .search-box").css("position") !== "fixed") {
          $(".page-main .search-box")
            .css({
              position: "fixed",
              height: "100%",
              overflow: "scroll"
            })
            .scrollTop(365);
        }
      } else {
        $(".page-main .search-box").css({
          position: "absolute",
          height: "",
          overflow: ""
        });
      }
    });
  }

  $(".lnb").on({
    mouseover: function () {
      if (!$("body").hasClass("lnb-over-on")) {
        $("body").addClass("lnb-over-on");
        $(".lnb .depth").addClass("on");
        $(".lnb-over").addClass("on");
      } else {
        clearTimeout(timer);
      }
    },
    mouseleave: function () {
      timer = setTimeout(function () {
        if ($("body").hasClass("lnb-over-on")) {
          $("body").removeClass("lnb-over-on");
          $(".lnb .depth").removeClass("on");
          $(".lnb-over").removeClass("on");
        }
      }, 1000);
    }
  });

  $(".lnb .depth").on({
    mouseover: function () {
      clearTimeout(timer);
    }
  });
});

var description = document.querySelectorAll(".lec-description");
description.forEach(function (item) {
  if (item.innerText.length > 50) {
    item.innerText = `${item.innerText.substring(0, 50)}...`;
  }
});

var period = document.getElementById("period-range"),
  inc = document.getElementById("increment"),
  dec = document.getElementById("decrement"),
  mid = document.getElementById("middle");

period.addEventListener("input", function () {
  if ($(this).val() === "0") {
    $(".short").css({ display: "block" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "none" });
  } else if ($(this).val() === "50") {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "block" });
    $(".long").css({ display: "none" });
  } else {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "block" });
  }
});

inc.addEventListener("click", function () {
  period.stepUp(1);
  var val = period.value;

  if (val === "0") {
    $(".short").css({ display: "block" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "none" });
  } else if (val === "50") {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "block" });
    $(".long").css({ display: "none" });
  } else {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "block" });
  }
});

mid.addEventListener("click", function () {
  var val = period.value;
  console.log(val);
  if (val === "0") {
    period.stepUp(1);
  } else if (val === "100") {
    period.stepDown(1);
  }
  $(".short").css({ display: "none" });
  $(".middle").css({ display: "block" });
  $(".long").css({ display: "none" });
});

dec.addEventListener("click", function () {
  period.stepDown(1);
  var val = period.value;

  if (val === "0") {
    $(".short").css({ display: "block" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "none" });
  } else if (val === "50") {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "block" });
    $(".long").css({ display: "none" });
  } else {
    $(".short").css({ display: "none" });
    $(".middle").css({ display: "none" });
    $(".long").css({ display: "block" });
  }
});

var mql = window.matchMedia("screen and (-webkit-min-device-pixel-ratio:0)");
if (mql.matches) {
  console.log("hey!!");
  $("#period-range").on("input", function () {
    var val = $(this).val();
    $("#period-range").css({
      background:
        "linear-gradient(to right, white 0%, white " +
        val +
        "%, #82a4ff " +
        val +
        "%, #82a4ff 100%)"
    });
  });
}
