describe('FizzBuzz', function () {
    var game;

   beforeEach(function () {
       game = new FizzBuzz();
    });

   describe('knows when a number is', function () {

        it('is divisable by 3', function () {
            expect(game.divisibleByThree(3)).toBe(true)
        });

        it('is divisable by 5', function () {
            expect(game.divisibleByFive(5)).toBe(true)
        });

        it('is divisable by 15', function () {
            expect(game.divisibleByFifteen(15)).toBe(true)
        });

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
