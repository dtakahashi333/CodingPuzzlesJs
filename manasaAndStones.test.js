const { stones, stonesByOptimal } = require("./manasaAndStones");

test("Stones test case 1", () => {
  const n = 3;
  const a = 2;
  const b = 3;
  const expected = [4, 5, 6];
  expect(stones(n, a, b)).toEqual(expected);
});

test("Stones test case 2", () => {
  const n = 3;
  const a = 1;
  const b = 2;
  const expected = [2, 3, 4];
  expect(stones(n, a, b)).toEqual(expected);
});

test("Stones test case 3", () => {
  const n = 4;
  const a = 10;
  const b = 100;
  const expected = [30, 120, 210, 300];
  expect(stones(n, a, b)).toEqual(expected);
});

test("Stones (optimal) test case 1", () => {
  const n = 3;
  const a = 2;
  const b = 3;
  const expected = [4, 5, 6];
  expect(stonesByOptimal(n, a, b)).toEqual(expected);
});

test("Stones (optimal) test case 2", () => {
  const n = 3;
  const a = 1;
  const b = 2;
  const expected = [2, 3, 4];
  expect(stonesByOptimal(n, a, b)).toEqual(expected);
});

test("Stones (optimal) test case 3", () => {
  const n = 4;
  const a = 10;
  const b = 100;
  const expected = [30, 120, 210, 300];
  expect(stonesByOptimal(n, a, b)).toEqual(expected);
});
