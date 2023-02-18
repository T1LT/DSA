// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} grid
 * @param {string} word
 * @return {boolean}
 */

var exist = function(grid, word) {
  if (!grid.length) return false;
  const h = grid.length;
  const w = grid[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const dfs = (x, y, k) => {
    if (grid[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;
    grid[x][y] = '#';
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (dfs(i, j, k + 1)) return true;
      }
    }
    grid[x][y] = word[k];
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};