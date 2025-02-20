function findNextBigger(arr, s, e, k) {
  const mid = Math.floor((s + e) / 2);

  if (s >= e) {
    if (arr[s] <= k) {
      return s + 1;
    } else {
      return s;
    }
  }

  if (k < arr[mid]) {
    return findNextBigger(arr, s, mid - 1, k);
  } /* (arr[mid] < k) */ else {
    return findNextBigger(arr, mid + 1, e, k);
  }
}

function biggerIsGreater(w) {
  const n = w.length;

  // If there is only a character in a string, there is no permutation for it.
  if (n <= 1) {
    return "no answer";
  }

  // Split the string to characters.
  let chars = w.split("");

  let i = n - 2;
  for (; i >= 0; --i) {
    if (chars[i] < chars[i + 1]) {
      break;
    }
  }

  if (i == -1) {
    return "no answer";
  } else {
    const firstPart = chars.slice(0, i + 1);
    const secondPart = chars.slice(i + 1);
    secondPart.sort();
    chars = firstPart.concat(secondPart);
    // Find a next bigger value than chars[i] from the second part.
    const j = findNextBigger(chars, i + 1, n - 1, chars[i]);
    // Swap the values.
    const tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
    // Change the character array back to a string.
    return chars.join("");
  }
}

module.exports = {
  biggerIsGreater,
};
