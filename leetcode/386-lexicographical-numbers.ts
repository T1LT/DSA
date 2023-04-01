// https://leetcode.com/problems/lexicographical-numbers/

function lexicalOrder(n: number): number[] {
  const res: number[] = [];
  const dfs = (x: number, n: number, ones: number): void => {
    if (x > n || ones === 10) return;
    res.push(x);
    dfs(x * 10, n, 0);
    dfs(x + 1, n, ones + 1);
  };
  dfs(1, n, 1);
  return res;
};

// let res = [];
// for (let i = 1; i <= n; i++) res.push(i);
// return res.sort();