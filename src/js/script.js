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
});
