$(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
    $(".generals").slideToggle();
    $(".awesome").slideToggle();
  });
  $("#boo").click(function(){
    $("#peek").toggleClass();
  });
  $("#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("#original").click(function(){
    $("body").removeClass();
  });
  $("#peek").click(function(){
    $("#peek").toggleClass("highlight");

  });
});
