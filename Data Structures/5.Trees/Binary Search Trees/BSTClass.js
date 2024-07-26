/* Binary Search Tree Class


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

insert(){
    
}
}

let tree = new BinarySearchTree;

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9)

console.log(tree)