const { kaprekarNumbers } = require("./kaprekarNumbers");

test("Kaprekar numbers between 1 and 100", () => {
  expect(kaprekarNumbers(1, 100)).toStrictEqual([1, 9, 45, 55, 99]);
});

test("Kaprekar numbers between 400 and 700", () => {
  expect(kaprekarNumbers(400, 700)).toStrictEqual([]);
});
