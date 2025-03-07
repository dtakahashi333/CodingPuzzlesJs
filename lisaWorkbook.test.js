const { workbook, workbookByChatGPT } = require("./lisaWorkbook");

test("Workbook test case 1", () => {
  expect(workbook(2, 3, [4, 2])).toBe(1);
});

test("Workbook test case 2", () => {
  expect(workbook(5, 3, [4, 2, 6, 1, 10])).toBe(4);
});

test("Workbook test case 1 (GPT)", () => {
  expect(workbookByChatGPT(2, 3, [4, 2])).toBe(1);
});

test("Workbook test case 2 (GPT)", () => {
  expect(workbookByChatGPT(5, 3, [4, 2, 6, 1, 10])).toBe(4);
});
