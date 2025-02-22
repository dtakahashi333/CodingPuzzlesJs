const { beautifulTriplets } = require("./beautifulTriplets");

test("The number of beautiful triplets in [2, 2, 3, 4, 5] is 3", () => {
  const d = 1;
  const arr = [2, 2, 3, 4, 5];
  const expected = 3;
  expect(beautifulTriplets(d, arr)).toBe(expected);
});

test("The number of beautiful triplets in [1, 2, 4, 5, 7, 8, 10] is 3", () => {
  const d = 3;
  const arr = [1, 2, 4, 5, 7, 8, 10];
  const expected = 3;
  expect(beautifulTriplets(d, arr)).toBe(expected);
});
