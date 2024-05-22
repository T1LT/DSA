// https://leetcode.com/problems/course-schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prereqs) {
  const visited = new Set();
  const visiting = new Set();
  const graph = buildGraph(prereqs);
  for (const vertex in graph) {
    if (!dfs(graph, vertex, visited, visiting)) return false;
  }
  return true;
};

const dfs = (graph, vertex, visited, visiting) => {
  if (visiting.has(vertex)) return false;
  if (visited.has(vertex)) return true;
  if (!graph[vertex]) return true;
  visiting.add(vertex);
  let res = true;
  for (const neighbor of graph[vertex]) {
    res &&= dfs(graph, neighbor, visited, visiting);
  }
  visiting.delete(vertex);
  visited.add(vertex);
  return res;
};

const buildGraph = edges => {
  const graph = {};
  for (let [x, y] of edges) {
    if (graph[x]) graph[x].push(y);
    else graph[x] = [y];
  }
  return graph;
};