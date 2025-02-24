// The Time in Words
// https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=false

/**
 * 
 * @param {number} h the hour of the day
 * @param {number} m the minutes after the hour
 * @returns {string} a time string as described
 */
function timeInWords(h, m) {
  const numStr = [
    "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", 
    "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", 
    "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", 
    "twenty nine", "half"
  ];
  h = Number(h);
  m = Number(m);
  if (m > 30) {
    h = (h + 1) % 12;
    if (m === 45) {
      return `${numStr[60 - m]} to ${numStr[h]}`;
    } else if (m === 1) {
      return `${numStr[60 - m]} minute to ${numStr[h]}`;
    } else {
      return `${numStr[60 - m]} minutes to ${numStr[h]}`;
    }
  } else {
    if (m === 0) {
      return `${numStr[h]} o' clock`;
    } else if (m === 15 || m === 30) {
      return `${numStr[m]} past ${numStr[h]}`;
    } else if (m === 1) {
      return `${numStr[m]} minute past ${numStr[h]}`;
    } else {
      return `${numStr[m]} minutes past ${numStr[h]}`;
    }
  }
}

module.exports = {
  timeInWords
}