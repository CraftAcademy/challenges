describe('FizzBuzz3', function () {
  describe('returns', function () {
    it('"Fizz" when number is divisible by 3', function () {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });

    it('"Buzz" when number is divisible by 5', function () {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when number is divisible by 15', function () {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });

    it('Returns number when no conditions are met', function() {
       expect(fizzBuzz(1)).toEqual(1)
    });
  });
});
