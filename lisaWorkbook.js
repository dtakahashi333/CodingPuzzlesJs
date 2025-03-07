// Lisa's Workbook
// https://www.hackerrank.com/challenges/lisa-workbook/problem?isFullScreen=true

/**
 *
 * @param {number} n The number of chapters
 * @param {number} k The maximum number of problems per page
 * @param {Array} arr The number of problems in each chapter
 * @returns {number} The number of special problems in the workbook
 */
function workbook(n, k, arr) {
  let nSpecials = 0;
  let curPage = 0;
  for (let nProblems of arr) {
    const pages = Math.floor(nProblems / k); // Not include the last page of the chapter.
    const lastProblems = nProblems % k; // The number of problemns in the last page of the chapter.
    let curProblem = 0;
    for (let i = 0; i < pages; ++i) {
      curPage++;
      for (let j = 0; j < k; ++j) {
        if (++curProblem === curPage) {
          nSpecials++;
        }
      }
    }
    if (lastProblems > 0) {
      curPage++;
      // For the problems in the last page of the chapter.
      for (let j = 0; j < lastProblems; ++j) {
        if (++curProblem === curPage) {
          nSpecials++;
        }
      }
    }
  }
  return nSpecials;
}

/**
 *
 * @param {number} n The number of chapters
 * @param {number} k The maximum number of problems per page
 * @param {Array} arr The number of problems in each chapter
 * @returns {number} The number of special problems in the workbook
 */
function workbookByChatGPT(n, k, arr) {
  let nSpecials = 0;
  let curPage = 1; // Start at page 1
  for (let nProblems of arr) {
    const fullPages = Math.floor(nProblems / k); // Full pages in the chapter
    const lastPageProblems = nProblems % k; // Remaining problems on the last page

    // Check full pages
    for (let page = 1; page <= fullPages; page++) {
      // Check if any problem in this page matches the page number
      for (let problem = 1; problem <= k; problem++) {
        if ((page - 1) * k + problem === curPage) {
          nSpecials++;
        }
      }
      curPage++;
    }

    // Check last page if necessary
    if (lastPageProblems > 0) {
      for (let problem = 1; problem <= lastPageProblems; problem++) {
        if (fullPages * k + problem === curPage) {
          nSpecials++;
        }
      }
      curPage++;
    }
  }
  return nSpecials;
}

module.exports = {
  workbook,
  workbookByChatGPT,
};
