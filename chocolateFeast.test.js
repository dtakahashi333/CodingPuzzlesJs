const { chocolateFeast } = require("./chocolateFeast");

test("n=10, c=2, m=5, count=6", () => {
  expect(chocolateFeast(15, 3, 2)).toBe(9);
});

test("n=12, c=4, m=4, count=3", () => {
  expect(chocolateFeast(12, 4, 4)).toBe(3);
});

test("n=6, c=2, m=2, count=5", () => {
  expect(chocolateFeast(6, 2, 2)).toBe(5);
});
