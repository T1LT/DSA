Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;
  func ||= (x, y) => (x > y ? 1 : x < y ? -1 : 0);
  const pivot = this[0];
  let left = this.slice(1).filter((el) => func(el, pivot) === -1);
  let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
  left = left.quickSort(func);
  right = right.quickSort(func);
  return left.concat([pivot]).concat(right);
};
