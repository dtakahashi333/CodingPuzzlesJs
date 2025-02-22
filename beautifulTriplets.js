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

module.exports = {
  beautifulTriplets,
};
