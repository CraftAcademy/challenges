describe('FizzBuzz2', function () {
  var game;

  beforeEach(function () {
     game = new FizzBuzz2();
  });

  describe('game returns', function () {
      it('"Fizz" when number is divisible by 3', function () {
          expect(game.fizz_buzz(3)).toEqual("Fizz");
      });

      it('"Buzz" when number is divisible by 5', function () {
          expect(game.fizz_buzz(5)).toEqual("Buzz");
      });

      it('"FizzBuzz" when number is divisible by 15', function () {
          expect(game.fizz_buzz(15)).toEqual("FizzBuzz");
      });

      it('Returns number when no conditions are met', function() {
         expect(game.fizz_buzz(1)).toEqual(1)
      });
  });
});
