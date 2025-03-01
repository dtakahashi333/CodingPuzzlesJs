const { serviceLane } = require("./serviceLane");

test("Service lane test case 1", () => {
  const n = 4;
  const width = [2, 3, 2, 1];
  const cases = [
    [1, 2],
    [2, 4],
  ];
  const expected = [2, 1];
  expect(serviceLane(n, width, cases)).toEqual(expected);
});

test("Service lane test case 2", () => {
  const n = 8;
  const width = [2, 3, 1, 2, 3, 2, 3, 3];
  const cases = [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ];
  const expected = [1, 2, 3, 2, 1];
  expect(serviceLane(n, width, cases)).toEqual(expected);
});
