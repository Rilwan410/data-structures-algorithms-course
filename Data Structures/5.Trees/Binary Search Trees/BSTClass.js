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
}

let tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(2);
tree.insert(22);
tree.insert(12);
tree.insert(11);
console.log(tree.find(12));
// console.log(tree);
