class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // Val doesn't matter priority queue is constructed using priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /* Priority Queue
        - Write Min Binary Heap - lower number means higher priority
        - Each Node has a val and priority. Use the priority to build the heap
        - Enqueue method accepts a values and priority, makes a new node, and puts it in the right spot based off of its priority
        - Dequeue method removes root element, returns it, and rearranges heap using priority
   */
  Enqueue(val, priority) {
    this.bubbleUp(val, priority);
  }
  bubbleUp(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[index].priority < this.values[parentIndex]?.priority) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  Dequeue() {
    let temp = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[0];
    this.values[0] = temp;

    let root = this.values.pop();
    let index = 0;
    let child = index * 2 + 1;
    let child2 = this.values[index * 2 + 2] ? index * 2 + 2 : child;

    while (
      ((this.values[index]?.priority > this.values[child]?.priority ||
        this.values[index]?.priority > this.values[child2]?.priority) &&
        child < this.values.length) ||
      child2 < this.values.length
    ) {
      if (this.values[child]?.priority < this.values[child2]?.priority) {
        let temp = this.values[index];
        this.values[index] = this.values[child];
        this.values[child] = temp;
        index = child;
      } else {
        let temp = this.values[index];
        this.values[index] = this.values[child2];
        this.values[child2] = temp;
        index = child2;
      }
      child = index * 2 + 1;
      child2 = index * 2 + 2;
    }

    return root;
  }
}
let PQ = new PriorityQueue();
PQ.Enqueue('common cold', 5);
PQ.Enqueue('gunshot wound', 1);
PQ.Enqueue('high fever', 4);
PQ.Enqueue('broken arm', 2);
PQ.Enqueue('glass in foot', 3);
PQ.Dequeue();

console.log(PQ);
