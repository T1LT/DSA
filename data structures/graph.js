// a set of vertices and edges

// adjacency list
const graph = { 1: [2, 5], 2: [1, 3, 4], 3: [2, 4], 4: [2, 3], 5: [1] };

// list of edges
// matrix

// adjacency matrix
//      1 2 3 4 5
// 1 [ [0,1,0,0,1] ]
// 2 [ [0,1,0,0,1] ]
// 3 [ [0,1,0,1,0] ]
// 4 [ [0,1,1,0,0] ]
// 5 [ [1,0,0,0,0] ]

const dfs = (graph, vertex, visited = new Set()) => {
  if (visited.has(vertex)) return;
  visited.add(vertex);

  // processing step
  console.log(vertex);

  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
};

const bfs = (graph, vertex) => {
  const visited = new Set();
  const queue = [vertex];
  visited.add(vertex);

  while (queue.length) {
    const curr = queue.shift();

    // processing step
    console.log(curr);

    for (const neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

// dfs(graph, 1);
bfs(graph, 1);
