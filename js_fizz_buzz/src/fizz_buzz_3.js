function fizzBuzz(i) {
  var fizz = "Fizz", buzz = "Buzz"
  var result = !(i % 3) ? !(i % 5) ? fizz + buzz : fizz : !(i % 5) ? buzz : i;
  return result;
}
