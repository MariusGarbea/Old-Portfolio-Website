/*http://zurb.com/playground/twentytwenty*/

$(document).ready(function() {
  var msg = "Solving problems for fun"
  var index = 1;
  setTimeout(function() {
    var int = setInterval(function(){
      $("#writetext").text(msg.substring(0, index) + "|");
      index++;
      if(index == msg.length) {
        $("#writetext").text(msg.substring(0, index));
        clearInterval(int);
      }
    }, 100);
  }, 1000);
  $(".port").mouseover(function() {
    $(this).css("opacity", "0.3");
    $(this).parent().siblings('.description').css("opacity", "1");
  });
  $(".port").mouseleave(function() {
    $(this).css("opacity", "1");
    $(this).parent().siblings('.description').css("opacity", "0");
  });
  $(".nav").onePageNav();
});
