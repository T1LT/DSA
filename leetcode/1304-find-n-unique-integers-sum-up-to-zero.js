// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

const sumZero = (n) => {
  let res = [0]
  let neg = -1;
  let pos = 1;
  for (let i = 0, j = 0; i < n - 1; i++) {
    if (i % 2 === 0) {
      res.push(neg--);
    } else {
      res.push(pos++);
    }
  }
  if (n % 2 === 0) res[n - 2] -= res[n - 1];
  return res;
};