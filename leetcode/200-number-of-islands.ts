// https://leetcode.com/problems/number-of-islands/

const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function numIslands(grid: string[][]): number {
  let count: number = 0;
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;
};

const dfs = (i: number, j: number, grid: string[][]): void => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] !== "1") return;
  grid[i][j] = "#";
  for (const [x, y] of DIRS) dfs(i + x, j + y, grid);
}