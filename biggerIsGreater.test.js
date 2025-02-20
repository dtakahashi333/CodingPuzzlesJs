const path = require("path");
const fs = require("fs");
const { biggerIsGreater } = require("./biggerIsGreater");

test('next bigger of "ab" is "ba"', () => {
  expect(biggerIsGreater("ab")).toBe("ba");
});

test('next bigger of "bb" is "no answer"', () => {
  expect(biggerIsGreater("ab")).toBe("ba");
});

test('next bigger of "hefg" is "hegf"', () => {
  ß;
  expect(biggerIsGreater("hefg")).toBe("hegf");
});

test('next bigger of "dhck" is "dhkc"', () => {
  expect(biggerIsGreater("dhck")).toBe("dhkc");
});

test('next bigger of "dkhc" is "hcdk"', () => {
  expect(biggerIsGreater("dkhc")).toBe("hcdk");
});

test('next bigger of "lmno" is "lmon"', () => {
  expect(biggerIsGreater("lmno")).toBe("lmon");
});

test('next bigger of "dcba" is "no answer"', () => {
  expect(biggerIsGreater("dcba")).toBe("no answer");
});

test('next bigger of "dcbb" is "no answer"', () => {
  expect(biggerIsGreater("dcbb")).toBe("no answer");
});

test('next bigger of "abdc" is "acbd"', () => {
  expect(biggerIsGreater("abdc")).toBe("acbd");
});

test('next bigger of "abcd" is "abdc"', () => {
  expect(biggerIsGreater("abcd")).toBe("abdc");
});

test('next bigger of "fedcbabcd" is "fedcbabdc"', () => {
  expect(biggerIsGreater("fedcbabcd")).toBe("fedcbabdc");
});

test('test case 01', () => {
  let input = fs.readFileSync(
    path.join(__dirname, "data", "bigger_is_greater", "input01.txt"),
    { encoding: "utf-8" }
  );
  input = input.split(/\r?\n/);
  let output = fs.readFileSync(
    path.join(__dirname, "data", "bigger_is_greater", "output01.txt"),
    { encoding: "utf-8" }
  );
  output = output.split(/\r?\n/);

  const t = Number(input.shift());

  for (let i = 0; i < t; ++i) {
    expect(biggerIsGreater(input.shift())).toBe(output.shift());
  }
});
