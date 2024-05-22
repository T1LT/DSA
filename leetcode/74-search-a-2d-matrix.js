/**
  * @param {number[][]} matrix
  * @param {number} target
  * @return {boolean}
  *
  */
var searchMatrix = function(matrix, target) {
  let r = matrix.length, c = matrix[0].length;
  let low = 0, high = (r * c) - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midR = Math.floor(mid / c);
    let midC = mid % c;

    if (matrix[midR][midC] === target) return true;
    else if (matrix[midR][midC] > target) high = mid - 1;
    else low = mid + 1;
  }

  return false;
};

// iterate over the rows and perform binary search on each - O(m * log n)
// binary search the row heads to find the right row to perform binary search on - O(log m + log n)
// binary search the entire matrix at once - O(log (m * n))
