/*http://zurb.com/playground/twentytwenty*/

$(document).ready(function() {
  $(".port").mouseover(function() {
    $(this).css("opacity", "0");
    $(this).parent().siblings('.description').css("opacity", "1");
  });
  $(".port").mouseleave(function() {
    $(this).css("opacity", "1");
    $(this).parent().siblings('.description').css("opacity", "0");
  });
  $(".nav").onePageNav();
});
