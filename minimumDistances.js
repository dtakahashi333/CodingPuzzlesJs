// Minimum Distances
// https://www.hackerrank.com/challenges/minimum-distances/problem
function minimumDistances(a) {
  const n = a.length;
  const hashTable = {};
  let minDistance = n;
  for (let i = 0; i < n; ++i) {
    if (hashTable[a[i]] !== undefined) {
      const distance = i - hashTable[a[i]];
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
    hashTable[a[i]] = i;
  }
  if (minDistance === n) {
    return -1;
  } else {
    return minDistance;
  }
}

module.exports = {
  minimumDistances,
};
