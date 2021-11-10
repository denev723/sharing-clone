$(document).ready(function () {
  var links = $("a[href='javascript:void(0)']");
  $.each(links, function (index, item) {
    item.addEventListener("click", function () {
      alert("준비중입니다.");
    });
  });

  var mql = window.matchMedia("screen and (-webkit-min-device-pixel-ratio:0)");
  if (mql.matches) {
    console.log("hey!!");
  } else {
    console.log("hoo!");
  }

  var searchBg = $(".search-box > .content-bg");
  var bgHeight = $(".search-box > .content-wrapper").outerHeight();
  searchBg.css("height", bgHeight);

  var categoryHeight = $(".main-category > .category-list").outerHeight();
  var categoryBg = $(".main-category > .category-wrapper");
  categoryBg.css("height", categoryHeight);

  // var mainNotice = $(".main-notice");
  // var noticeTitle = $(".main-notice > .notice-title");
  // var noticeContent = $(".main-notice > .notice-content");
  // var contentWidth = mainNotice.outerWidth() - 45 - noticeTitle.width();
  // noticeContent.css("width", contentWidth);

  $(".search-box-handle").on("click", function () {
    if (!$(".search-box").hasClass("on")) {
      $(".search-box").addClass("on");
      $(".search-box").scrollTop(0);
      $(".content-box").addClass("on");
    } else {
      $(".search-box").removeClass("on");
      $(".content-box").removeClass("on");
    }
  });

  $(".category-btn").on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 365) {
      if ($(".page-main .search-box").css("position") !== "fixed") {
        $(".page-main .search-box")
          .css({
            position: "fixed",
            height: "100%",
            overflow: "scroll",
          })
          .scrollTop(365);
      }
    } else {
      $(".page-main .search-box").css({
        position: "absolute",
        height: "",
        overflow: "",
      });
    }
  });
});
