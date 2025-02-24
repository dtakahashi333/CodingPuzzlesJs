const { halloweenSale, halloweenSale2 } = require("./halloweenSale");

test("5 games can be purchased with p=20, d=3, m=6, s=70", () => {
  expect(halloweenSale(20, 3, 6, 70)).toBe(5);
});

test("6 games can be purchased with p=20, d=3, m=6, s=80", () => {
  expect(halloweenSale(20, 3, 6, 80)).toBe(6);
});

test("7 games can be purchased with p=20, d=3, m=6, s=85", () => {
  expect(halloweenSale(20, 3, 6, 85)).toBe(7);
});

test("4 games can be purchased with p=20, d=3, m=6, s=65", () => {
  expect(halloweenSale(20, 3, 6, 65)).toBe(4);
});

test("0 games can be purchased with p=100, d=1, m=1, s=99", () => {
  expect(halloweenSale(100, 1, 1, 99)).toBe(0);
});

test("5 games can be purchased with p=20, d=3, m=6, s=70", () => {
  expect(halloweenSale2(20, 3, 6, 70)).toBe(5);
});

test("6 games can be purchased with p=20, d=3, m=6, s=80", () => {
  expect(halloweenSale2(20, 3, 6, 80)).toBe(6);
});

test("7 games can be purchased with p=20, d=3, m=6, s=85", () => {
  expect(halloweenSale2(20, 3, 6, 85)).toBe(7);
});

test("4 games can be purchased with p=20, d=3, m=6, s=65", () => {
  expect(halloweenSale2(20, 3, 6, 65)).toBe(4);
});

test("0 games can be purchased with p=100, d=1, m=1, s=99", () => {
  expect(halloweenSale2(100, 1, 1, 99)).toBe(0);
});

test("0 games can be purchased with p=16, d=2, m=1, s=9981", () => {
  expect(halloweenSale2(16, 2, 1, 9981)).toBe(9917);
});

test("0 games can be purchased with p=100, d=19, m=1, s=180", () => {
  expect(halloweenSale2(100, 19, 1, 180)).toBe(1);
});
