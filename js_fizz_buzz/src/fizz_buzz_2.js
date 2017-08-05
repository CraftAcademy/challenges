function FizzBuzz2() {
  var _hasZeroReminder = function (number, divisor) {
      return (number % divisor === 0);
  };
  this.fizz_buzz = function (number) {
      if (_hasZeroReminder(number, 15)) {
          return "FizzBuzz";
      }
      else if (_hasZeroReminder(number, 5)) {
          return "Buzz";
      }
      else if (_hasZeroReminder(number, 3)) {
          return "Fizz";
      }
      else
          return number;
  };

};
