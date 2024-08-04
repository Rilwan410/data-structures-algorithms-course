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

  /* Depth First Traversal Recursive
        - The function should accept a starting node
        - Create a list to store the end result, to be returned at the very end
        - Create an object to store visited vertices
        - Create a helper function which accepts a vertex
            - The helper function should return early if the vertex is empty
            - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
            - Loop over all of the values in the adjacencyList for that vertex 
            - If any of those values have not been visited, recursively invoke the helper function with that vertex
        - Invoke the helper function with the starting vertex
        - Return the results array
   */
  // FAILED // Couldn't figure out solution
  DFSRecursive(vertex) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function helper(input) {
      if (!input) return;
      visited[input] = true;
      result.push(input);
      adjacencyList[input].forEach((v) => {
        if (!visited[v]) {
          return helper(v);
        }
      });
    })(vertex);
    return result;
  }


  /* DFS Iterative
        -
   */
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

console.log(g.DFSRecursive("A"));
// console.log(g);
