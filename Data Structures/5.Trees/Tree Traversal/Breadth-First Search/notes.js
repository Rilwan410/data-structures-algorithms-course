// Step to creating a Breadth-First Search algorithm
/* Steps - Iteratively
    - Create a queue (this can be an array) and a variable to store the values of nodes visited
    - Place the root node in the queue
    - Loop as long as there is anything in the queue
        - Dequeue a node from the queue and push the value of the node into the variable that stories the nodes
        - If there is a left property on the node dequeued - add it to the queue
        - If there is a right property on the node dequeued - add it to the queue
    - Return the variable that stores the values    
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /* Inserting Node a Tree Pseudocode
             - Create a new node
             - Starting at the root
                  - Check if there is a root, if not- the root now becomes that new node!
                  - IF there is a root, check if the value of the new node is greater than or less than the value of the root
                  - If it is greater:
                      > Check to see if there is a node to the right
                          > If there is, move to that node and repeat these steps
                          > If there is not, add that node as the right property
                  IF it is less than:
                      > Check to see if there is a node to the left
                          > If there is, move to that node and repeat these steps
                          > If there is not, add that node as the left property
         */
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // Finding a Node in a BST
  /* Find Pseudocode
          - Check if there is a root, if not - we're done searching
          -If there is a root, check if the value of the new node is the value we are looking for.
            - If we found it, we're done
            - If not, check to see if the value is greater than or less than the value of the root
            - If it is greater
                -Check to see if there is a node to the right
                  - If there is, move to that node and repeat these steps
                  - If there is not, we're done searching 
            - If it is less
                - Check to see if there is a node to the left
                  - Ff there is, move to that node and repeat these steps
                  - If there is not, we're done searching
        */
  find(val) {
    if (!this.root) return false;
    if (this.root.val === val) return true;
    let current = this.root;
    let found = false;
    while (!found) {
      if (current === null) return false;
      if (current.val === val) return current;
      if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  contains(val) {
    if (!this.root) return false;
    if (this.root.val === val) return true;
    let current = this.root;
    let found = false;
    while (!found) {
      if (current === null) return false;
      if (current.val === val) return true;
      if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  // Step to creating a Breadth-First Search algorithm
  /* Steps - Iteratively
    - Create a queue (this can be an array) and a variable to store the values of nodes visited
    - Place the root node in the queue
    - Loop as long as there is anything in the queue
        - Dequeue a node from the queue and push the value of the node into the variable that stories the nodes
        - If there is a left property on the node dequeued - add it to the queue
        - If there is a right property on the node dequeued - add it to the queue
    - Return the variable that stores the values    
 */
  // My solution // passed //
  BFS() {
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      visited.push(queue[0].val);
      queue.shift();
    }
    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS());
// console.log(tree);
