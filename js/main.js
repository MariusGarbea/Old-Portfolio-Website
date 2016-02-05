$(document).ready(function() {
  $(".port").mouseover(function() {
    $(this).css("opacity", "0.3");
    $(this).parent().siblings('.fa.fa-diamond').css("opacity", "1");
  });
  $(".port").mouseleave(function() {
    $(this).css("opacity", "1");
    $(this).parent().siblings('.fa.fa-diamond').css("opacity", "0");
  });
});
