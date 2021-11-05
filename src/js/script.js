$(document).ready(function () {
  $("a[href='javascript:void(0)']").each((index, item) =>
    item.addEventListener("click", () => alert("준비중입니다.")),
  );
});
