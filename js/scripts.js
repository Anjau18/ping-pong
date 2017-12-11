$(document).ready(function() {
    $("form#place").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = place(number);
      $(".append").text(result);
    });
  });
  var place = function(number) {
    if (number % 3 === 0) {
      $(".append").append("<li>"+"ping"+"</li>")
    } else {
      return false;
    }
  };