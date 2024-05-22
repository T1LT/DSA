/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = {};
  for (const str of strs) {
    let sorted = [...str].sort().join("");
    if (hash[sorted]) {
      hash[sorted].push(str);
    } else {
      hash[sorted] = [str];
    }
  }
  return Object.values(hash);
};