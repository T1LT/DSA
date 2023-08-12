/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let seen = new Array(n),
    res = 0;
  for (let num = 2; num < n; num++) {
    if (seen[num]) continue;
    res++;
    for (let mult = num * num; mult < n; mult += num) seen[mult] = 1;
  }
  return res;
};
