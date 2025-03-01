const { cavityMap } = require("./cavityMap");

test("Find cavities test case 1", () => {
  const grid = ["989", "191", "111"];
  const expected = ["989", "1X1", "111"];
  expect(cavityMap(grid)).toEqual(expected);
});

test("Find cavities test case 2", () => {
  const grid = ['1112', '1912', '1892', '1234'];
  const expected = ['1112', '1X12', '18X2', '1234'];
  expect(cavityMap(grid)).toEqual(expected);
});

test("Find cavities test case 3", () => {
  const grid = [];
  const expected = [];
  for (let i = 0; i < 100; ++i) {
    let row = ""
    for (let j = 0; j < 100; ++j) {
      row += "9";
    }
    grid.push(row);
    expected.push(row);
  }
  expect(cavityMap(grid)).toEqual(expected);
});
