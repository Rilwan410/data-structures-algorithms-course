// Piece of data - val
// Reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node('Hi')
// first.next = new Node ('there')
// first.next.next = new Node ('how')
// first.next.next.next = new Node ('are')
// first.next.next.next.next = new Node ('you')

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Pushing pseudocode
    - This function should accept a value
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head and tail to be the newly created node
  */
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }




  // Popping: Removing a node from the end of the Linked List!
  /* Popping Pseudocode
        - If there are no nodes in the list, return undefined
        - Loop through the entire list until you reach the tail
        - Set the next property of the second-to-last node to be null
        - Set the tail to be the second-to-last node
   */
  pop(){

  }

  
}



// console.log(list);

// let list = new SinglyLinkedList()
