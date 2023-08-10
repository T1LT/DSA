/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t === "") return "";
  let tCount = {}, sCount = {};
  for (const char of t) tCount[char] = (tCount[char] || 0) + 1;
  let l = 0, need = Object.keys(tCount).length, have = 0;
  let lmin = -1, rmin = -1, min = Infinity;
  for (let r = 0; r < s.length; r++) {
    sCount[s[r]] = (sCount[s[r]] || 0) + 1;
    if (tCount[s[r]] && sCount[s[r]] === tCount[s[r]]) {
      have++;
    }
    while (have === need) {
      if ((r - l + 1) < min) {
        min = (r - l + 1);
        lmin = l;
        rmin = r;
      }
      sCount[s[l]]--;
      if (tCount[s[l]] && sCount[s[l]] < tCount[s[l]]) have--;
      l++;
    }
  }
  return (min !== Infinity) ? s.slice(lmin, rmin + 1) : ""; 
};