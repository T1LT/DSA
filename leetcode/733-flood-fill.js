// https://leetcode.com/problems/flood-fill/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
class MyQueue extends Map {
  constructor() {
    super();
    this.insertionIdx = 0;
    this.removalIdx = 0;
  }
  
  enqueue(el) {
    this.set(this.insertionIdx, el);
    this.insertionIdx++;
  }

  dequeue() {
    const el = this.get(this.removalIdx);
    if (typeof el !== undefined) {
      this.delete(this.removalIdx);
      this.removalIdx++;
    }
    return el;
  }
}

// TC: O(m * n) -> m x n are the dims of the grid
// SC: O(m * n) -> m x n are the dims of the grid

var floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const queue = new MyQueue();
  const colorToFill = image[sr][sc];
  queue.enqueue([sr, sc]);
  while (queue.size) {
    const [r, c] = queue.dequeue();
    image[r][c] = color;
    for (const [dr, dc] of DIRS) {
      const newR = r + dr;
      const newC = c + dc;
      if (inBounds(newR, newC, image)) {
        if (image[newR][newC] === colorToFill) {
          queue.enqueue([newR, newC]);
        }
      }
    }
  }
  return image;
};

const inBounds = (x, y, image) => {
  if (x >= image.length || y >= image[0].length || x < 0 || y < 0) return false;
  return true;
};