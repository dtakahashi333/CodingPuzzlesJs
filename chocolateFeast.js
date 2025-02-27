// Chocolate Feast
// https://www.hackerrank.com/challenges/chocolate-feast/problem?isFullScreen=true

/**
 *
 * @param {number} n Bobby's initial amount of money
 * @param {number} c The cost of a chocolate bar
 * @param {number} m The number of wrappers he can turn in for a free bar
 * @return {number} The number of chocolates Bobby can eat after taking full
 *                  advantage of the promotion
 */
function chocolateFeast(n, c, m) {
  return chocolateFeastHelper(n, c, m, 0, 0);
}

function chocolateFeastHelper(n, c, m, wrappers, chocolates) {
  if (n < c && wrappers < m) {
    return chocolates;
  }
  const newChocolates = Math.floor(n / c); // The number of chocolates Bobby bought.
  const newWrappers = Math.floor(wrappers / m); // The number of chocolates Bobby exchanged wrappers for after the purchase.
  return chocolateFeastHelper(
    n % c,
    c,
    m,
    newChocolates + newWrappers + (wrappers % m), // New wrappers + remainders.
    chocolates + newChocolates + newWrappers // The number of chocolates Bobby ate.
  );
}

module.exports = {
  chocolateFeast,
};
