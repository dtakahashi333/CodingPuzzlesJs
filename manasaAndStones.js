// Manasa and Stones
// https://www.hackerrank.com/challenges/manasa-and-stones/problem?isFullScreen=true

function stones(n, a, b) {
  const dp = new Array(n);
  const set = new Set();
  stonesHelper(n - 1, a, b, 0, set);
  return Array.from(set);
}

function stonesHelper(n, a, b, sum, set) {
  if (n === 0) {
    set.add(sum);
    return;
  }
  // Take a.
  stonesHelper(n - 1, a, b, sum + a, set);
  // Take b.
  stonesHelper(n - 1, a, b, sum + b, set);
}

function stonesByOptimal(n, a, b) {
  if (a === b) {
    return [a * (n - 1)];
  } else {
    const result = [];
    for (let i = 0; i < n; ++i) {
      // The number of 'a' stones is used.
      result.push(a * i + b * (n - 1 - i));
    }
    result.sort((a, b) => a - b);
    return result;
  }
}

module.exports = {
  stones,
  stonesByOptimal,
};
