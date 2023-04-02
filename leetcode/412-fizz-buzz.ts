// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
  let res = [];
  for (let i: number = 1; i <= n; i++) {
    if (!(i % 3) && (i % 5)) res.push("Fizz");
    else if ((i % 3) && !(i % 5)) res.push("Buzz");
    else if (!(i % 3) && !(i % 5)) res.push("FizzBuzz");
    else res.push("" + i);
  }
  return res;
};