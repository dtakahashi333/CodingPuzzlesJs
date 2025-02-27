// Cavity Map
// https://www.hackerrank.com/challenges/cavity-map/problem

/**
 *
 * @param {Array} grid Each string represents a row of the grid
 * @returns {Array} The modified grid
 */
function cavityMap(grid) {
  const n = grid.length;
  // Convert a string array to an array of numbers.
  const numGrid = [];
  for (let row of grid) {
    numGrid.push(row.split("").map((cell) => Number(cell)));
  }
  for (let i = 1; i < n - 1; ++i) {
    for (let j = 1; j < n - 1; ++j) {
      const cur = numGrid[i][j];
      // Compare the value with top.
      const top = numGrid[i - 1][j];
      if (top === "X" || top >= cur) {
        continue;
      }
      const bottom = numGrid[i + 1][j];
      if (bottom === "X" || bottom >= cur) {
        continue;
      }
      const left = numGrid[i][j - 1];
      if (left === "X" || left >= cur) {
        continue;
      }
      const right = numGrid[i][j + 1];
      if (right === "X" || right >= cur) {
        continue;
      }
      numGrid[i][j] = "X";
    }
  }
  return numGrid.map((row) => row.join(""));
}

module.exports = {
  cavityMap,
};
