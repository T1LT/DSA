// https://leetcode.com/problems/longest-common-prefix

function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  for (let i: number = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substring(0, i);
  }
  return strs[0];
};