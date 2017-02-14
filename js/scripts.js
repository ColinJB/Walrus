$(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
    $(".generals").slideToggle();
    $(".awesome").slideToggle();
  });
  $("#boo").click(function(){
    $("#peek").toggleClass();
  })
});
