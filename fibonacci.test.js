const fibonacci = require('./fibonacci');

//calling the fibonacci function to test
test('fibonacci of 8 is', () => {
  expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});