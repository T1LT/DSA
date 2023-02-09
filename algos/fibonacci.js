const fibonacci = (n, res = [0, 1]) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  res.push(res.at(-1) + res.at(-2));
  fibonacci(n - 1, res);
  return res;
};

// console.log(fibonacci(5));
