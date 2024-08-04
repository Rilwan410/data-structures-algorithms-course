/* The Approach
    1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.

    2. Once we've moved to the node we're going to visit, we look at each of its neighbors

    3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node

    4. If the new total distance, to a node is less than the previous total, we store the new shorter distance for that node
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  /* Dijkstra's Pseudocode
    - This function should accept a starting and ending vertex
    - Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
    - After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where begin.
    - Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    - Start looping as long as there is anything in the priority queue
        > Dequeue a vertex from the priority queue
        > If that vertex is the same as the ending vertex we are done
        > Otherwise loop through each value in the adjacency list at that vertex
            . Calculate the distance to that vertex from the starting vertex
            . If the distance is less than what is currently stored in our distances object
                - Update the distances object with new lower distance
                - Update the previous object to contain that vertex
                - Enqueue the vertex with the total distance from the start node
   */
  // FAILED // Didn't understand 
  DIJ(start, end) {
    let current;
    let distances = {};
    let previous = {};
    let PQ = new PriorityQueue();
    for (let key in this.adjacencyList) {
      if (key !== start) {
        distances[key] = Infinity;
        previous[key] = null;
      } else {
        distances[key] = 0;
        previous[key] = null;
      }
    }
    for (let node in distances) {
      if (node !== start) PQ.enqueue(node, distances[node]);
    }
    while (PQ.values.length > 0) {
      current = PQ.dequeue();
      if (current === end) return;

      this.adjacencyList[current.val].forEach((node) => {

      });

      // if (startingDistance?.weight < distances[current.val]) {
      //   distances[current.val] = startingDistance.weight;
      //   PQ.enqueue(startingDistance);
      // }
    }
    console.log(PQ);
    console.log(distances);
    console.log(previous);
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("B", "E", 3);
g.addEdge("F", "E", 1);

console.log(g.adjacencyList); 

g.DIJ("A", "E");
