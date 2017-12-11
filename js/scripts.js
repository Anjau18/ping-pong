$(document).ready(function() {
    $("form#place").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = place(number);
      $(".append").text(result);
    });
  });
  

  var place = function(number){
  
    for (var i = 1; i <= number; i ++) {
        if (i % 15 == 0) {
            $(".append").append("<li>" + "PingPong" + "</li>");
        }
        else if (i % 5 == 0) {
            $(".append").append("<li>" + "Pong" + "</li>");
        }
         else if (i % 3 == 0) {
            $(".append").append("<li>" + "Ping" + "</li>");
        }
         else {
            $(".append").append("<li>" + i + "</li>");
        }
    }}
    $//("form#place")[0].reset();
 
    event.preventDefault();