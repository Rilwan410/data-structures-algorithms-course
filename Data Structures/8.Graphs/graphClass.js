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
}

let g = new Graph();
g.addVertex("tokyo");
g.addVertex("paris");
g.addVertex("dallas");
g.addVertex("aspen");
g.addVertex("miami");
g.addEdge("tokyo", "paris");
g.addEdge("tokyo", "miami");
g.addEdge("aspen", "miami");
g.addEdge("dallas", "miami");
g.addEdge("dallas", "paris");
g.addEdge("tokyo", "aspen");
g.removeVertex("tokyo");
console.log(g);
f