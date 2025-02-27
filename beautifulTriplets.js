// Beautiful Triplets
// https://www.hackerrank.com/challenges/beautiful-triplets/problem?isFullScreen=false
function beautifulTriplets(d, arr) {
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < n; ++k) {
          if (arr[k] - arr[j] === d) {
            count++;
          } else if (arr[k] - arr[j] > d) {
            break;
          }
        }
      } else if (arr[j] - arr[i] > d) {
        break;
      }
    }
  }
  return count;
}

function beautifulTripletsOptimal(d, arr) {
  // O(n)
  const n = arr.length;
  const hashTable = {};
  for (let i = 0; i < n; ++i) {
    if (hashTable[a[i]] !== undefined) {

    }
  }
}

module.exports = {
  beautifulTriplets,
};
