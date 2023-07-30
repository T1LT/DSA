// leetcode.com/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (
  text1,
  text2,
  i = 0,
  j = 0,
  memo = {}
) {
  const key = i + "," + j;
  if (key in memo) return memo[key];
  if (i === text1.length || j === text2.length) return 0;
  let res = 0;
  if (text1[i] === text2[j]) {
    res = longestCommonSubsequence(text1, text2, i + 1, j + 1, memo) + 1;
  } else {
    res = Math.max(
      longestCommonSubsequence(text1, text2, i + 1, j, memo),
      longestCommonSubsequence(text1, text2, i, j + 1, memo)
    );
  }
  return (memo[key] = res);
};
