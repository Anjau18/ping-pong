$(document).ready(function() {
    $("form#place").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = place(number);
      $("#result").text(result);
    });
  });
  var place = function(number) {
    if (number % 3 === 0) {
      return ping;
    } else {
      return false;
    }
  };