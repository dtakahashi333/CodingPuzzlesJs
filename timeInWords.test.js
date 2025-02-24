const { timeInWords } = require("./timeInWords");

test("5:47 to 'thirteen minutes to six'", () => {
  expect(timeInWords("5", "47")).toBe("thirteen minutes to six");
});

test("3:00 to 'three o' clock'", () => {
  expect(timeInWords("3", "00")).toBe("three o' clock");
});

test("7:15 to 'quarter past seven'", () => {
  expect(timeInWords("7", "15")).toBe("quarter past seven");
});

test("7:29 to 'twenty nine minutes past seven'", () => {
  expect(timeInWords("7", "29")).toBe("twenty nine minutes past seven");
});
