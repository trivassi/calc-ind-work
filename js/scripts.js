//backend
function UserNumbers(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}

UserNumbers.prototype.add = function () {
  return number1 + number2;
};

UserNumbers.prototype.subtract = function () {
  return number1 - number2;
};

UserNumbers.prototype.multiply = function () {
  return number1 * number2;
};

UserNumbers.prototype.divide = function () {
  var beforeDecimal = (number1 / number2);
  var beforeDecimalString = beforeDecimal.toString();

  var decimal = (number1 % number2);
  var decimalString = decimal.toString();

  return beforeDecimalString + "." + decimalString;
};

//front-end
var UserNumbers = require('./../js/calculator.js').usernumbersModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var inputtedNumber1 = parseFloat($('#number1').val());
    var inputtedNumber2 = parseFloat($('#number2').val());
    var newUserNumbers = new UserNumbers(inputtedNumber1, inputtedNumber2);


    if($('#operators').val() == "add") {
      $('#show-answer h2').text(newUserNumbers.add());
    } else if($('#operators').val() == "subtract"){

      $('#show-answer h2').text(newUserNumbers.subtract());
    } else if($('#operators').val() == "multiply"){

      $('#show-answer h2').text(newUserNumbers.multiply());
    } else if($('#operators').val() == "divide"){

      $('#show-answer h2').text(newUserNumbers.divide());
    }
  });
});
