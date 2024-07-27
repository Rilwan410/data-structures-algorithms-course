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

  // Depth-First Search In Order
  /* DFS - InOrder Pseudocode Steps - Recursively
                        - Create a variable to store the values of nodes visited
                        - Store the root of the BST in a variable called current
                        - Write a helper function which accepts a node
                        - If the node has a left property, call the helper function with the left property on the node
                        - Push the value of the node to the variable that stores the values
                        - If the node has a right property, call the helper function with the right property on the node
                        - Invoke the helper function with the current variable
                        - Return the array of values
            
                     */
  // My-ish solution // passed//
  DFSInOrder() {
    let current = this.root;
    let visited = [];
    (function helperFunc(input) {
      if (input.left) {
        helperFunc(input.left);
      }
      visited.push(input.val);
      if (input.right) {
        helperFunc(input.right);
      }
    })(current);
    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());

// console.log(tree);
