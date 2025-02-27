// Modified Kaprekar Numbers
// https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=false
function kaprekarNumbers(p, q) {
  const kaprekars = [];
  for (let n = p; n <= q; ++n) {
    // How many digits in n.
    const d = n.toString().length;
    const sqStr = (n * n).toString();
    const l = sqStr.slice(0, sqStr.length - d);
    const r = sqStr.slice(-d);
    if (Number(l) + Number(r) === n) {
      kaprekars.push(n);
    }
  }
  if (kaprekars.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(kaprekars.join(" "));
  }
  return kaprekars;
}

module.exports = {
  kaprekarNumbers,
};
