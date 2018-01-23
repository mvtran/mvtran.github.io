$(document).ready(function() {
  $.get("navbar.html", function(data){
    $("#navbar").replaceWith(data);
  });
  console.log("hello");
});
