/* DFS Pseudocode

    DFS (vertex):
        if vertex is empty
            return(this is base case)
        add vertex to results list
        mark vertex as visited
        for each neighbor in vertex's neighbors:
            if neighbor is not visited:
                recursively call DFS on neighbor

*/

/* We are building an Undirected Graph */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /* Adding a Vertex
              - Write a method called addVertex, which accepts a name of a vertex
              - It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
         */
  addVertex(val) {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }
  /* Adding an Edge
          - This function should accept two vertices we can call them vertex1 and vertex2
          - The function should find the in the adjacency list the key of vertex1 and push vertex2 to the array
          - The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
          - Don't worry about handling errors/invalid vertices
      */
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);

    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }

  /* Removing An Edge
          - This function should accept two vertices, we'll call them vertex1 and vertex2
          - The function should reassign the key of vertex1 to be an array that does not contain vertex2
          - The function should reassign the key of vertex2 to be an array that does not contain vertex1
          - Don't worry about handling errors/invalid vertices
       */
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2))
      this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1);
    if (this.adjacencyList[v2].includes(v1))
      this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1);
  }

  /* Removing A Vertex
              - The function should accept a vertex to remove
              - The function should loop as long as there are any other vertices in the adjacency list for that vertex
              - Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
              - Delete the key in the adjacency list for that vertex
         */
  removeVertex(vertex) {
    for (let v in this.adjacencyList) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  /* Breadth First
    - This function should accept a starting vertex
    - Create a queue (you can use an array) place the starting vertex in it
    - Create an array to store the nodes visited
    - Create an object to store nodes visited
    - Mark the starting vertex as visited
    - Loop as long as there is anything in the queue
    - Remove the first vertex from the queue and push it into the array that stores nodes visited
    - Loop over each vertex in the adjacency list for the vertex you are visiting.
    - If it is not inside the object that stores visited, mark it as visited and enqueue that vertex
    - Once you have finished looping, return the array of visited nodes
  */
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let node;
    while (queue.length > 0) {
      node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        result.push(node);
      }
      this.adjacencyList[node].forEach((v) => {
        if (!visited[v]) queue.push(v);
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.BFS("A"));
// console.log(g);
