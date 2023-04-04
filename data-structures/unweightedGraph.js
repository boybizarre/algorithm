class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [],
      visited = {},
      adjacencyList = this.adjacencyList;
    
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    console.log(result);
    console.log(visited);
    
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start],
      result = [],
      visited = {};

    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      // console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        };
      });
    };


    return result;
  }

  breadthFirst(start) {
    const queue = [start],
      result = [],
      visited = {};

    let currentVertex;
    
    visited[start] = true;
    while (queue.length) {
      // console.log(queue);
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        };
      });
    };

    return result;
  }
}

let graph = new Graph();



graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E", "F")

console.log(graph.breadthFirst("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F






// graph.addVertex('Tokyo');
// graph.addVertex('Dallas');
// graph.addVertex('Aspen');
// graph.addVertex('Lagos');
// graph.addVertex('Abuja');
// graph.addVertex('Ghana');

// graph.addVertex('San Francisco');
// graph.adjacencyList['Tokyo'].push('Something');
// graph.addVertex('Tokyo');

// graph.addEdge('Dallas', 'Tokyo');
// graph.addEdge('Dallas', 'Aspen');
// graph.addEdge('Aspen', 'Tokyo');
// graph.addEdge('Lagos', 'Abuja');
// graph.addEdge('Abuja', 'Ghana');
// graph.addEdge('Aspen', 'Ghana');
// graph.addEdge('Dallas', 'Ghana');
// graph.addEdge('Aspen', 'Lagos');

// graph.removeEdge('Aspen', 'Tokyo');
// graph.removeVertex('Aspen');
// graph.removeVertex('Lagos');
// graph.removeVertex('Ghana');

console.log(graph);
