// Service Lane
// https://www.hackerrank.com/challenges/service-lane/problem?isFullScreen=true

/**
 *
 * @param {number} n The size of the width array
 * @param {Array} width An array of widths at points along the road (indices)
 * @param {Array} cases Each element contains the starting and ending indices for a segment to consider, inclusive
 * @return {Array} the maximum width vehicle that can pass through each segment of the service lane described
 */
function serviceLane(n, width, cases) {
  const result = [];
  const m = cases.length;
  for (let j = 0; j < m; ++j) {
    const start = cases[j][0];
    const end = cases[j][1];
    let minWidth = 3;
    for (let k = start; k <= end; ++k) {
      if (width[k] < minWidth) {
        minWidth = width[k];
      }
    }
    result.push(minWidth);
  }
  return result;
}

module.exports = {
  serviceLane,
};
