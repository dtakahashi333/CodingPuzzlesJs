const { minimumDistances } = require("./minimumDistances");

test("Minimun distance between two values in [3,2,1,2,3] is 2", () => {
  const a = [3, 2, 1, 2, 3];
  const expected = 2;
  expect(minimumDistances(a)).toBe(expected);
});

test("Minimun distance between two values in [7,1,3,4,1,7] is 3", () => {
  const a = [7, 1, 3, 4, 1, 7];
  const expected = 3;
  expect(minimumDistances(a)).toBe(expected);
});

test("Minimun distance between two values in [1,1] is 1", () => {
  const a = [1, 1];
  const expected = 1;
  expect(minimumDistances(a)).toBe(expected);
});
