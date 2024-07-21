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
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return node;
    }
    let index = 0;
    let current = this.head;
    let previous;

    while (index <= this.length - 2) {
      previous = current;
      current = current.next;
      index++;
    }

    this.tail = previous;
    previous.next = null;
    this.length--;
    return current;
  }

  // Shifting: removing a new node from the beginning of the Linked List
  /* Shifting pseudocode
    - If there are no nodes, returns undefined
    - Store the current head property in a variable
    - Set the head property to be the current head's next property
    - Decrement the length by 1
    - Return the value of the node removed
  */
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    // this.head = null;
    this.head = oldHead.next;
    this.tail = this.head.next ? this.head.next : this.head;
    this.length--;
    return oldHead;
    // (1) -> (2) -> (3) -> (4)
  }

  // Unshift: Adding a new node to the beginning of the Linked List
  /* Unshift Pseudocode:
    - Should accept a value
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head and tail to be the newly created node
    - Otherwise set the newly created node's next property to be the current head property on the list
    - Set the head property on the list to be that newly created node
    - Increment the length of the list by 1
*/
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head ? this.head : null;
    this.head = newNode;
    this.tail = newNode.next ? this.tail : newNode;
    this.length++;
    return this;
  }

  // Get: Retrieving a node by it's position in the Linked List
  /* Get Pseudocode
    - function should accept an index
    - If the index is less than zero or greater than or equal to the length of the list, return null
    - Loop through the list until you reach the index and return the node at that specific index
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let element = this.head;
    let count = 0;
    while (!(count === index)) {
      count++;
      element = element.next ? element.next : element;
    }
    return element;
  }

  // Set: Changing the value of a node based on it's position in the Linked List
  /* Set Pseudocode
    - This function should accept a value and an index
    - Use your get function to find the specific node
    - If the node is not found, return false
    - If the node is found, set the value of that node to be the value passed to the function and return true
*/
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let element = this.head;
    let count = 0;
    while (!(count === index)) {
      count++;
      element = element.next ? element.next : element;
    }
    return (element.val = val) && true;
  }

  // Insert: Adding a node to the Linked List at a specific index
  /*Insert Pseudocode
    - Accepts two arguments: index and value
    - If the index is less than zero or greater than the length, return false
    - If the index is the same as the length, push a new node to the end of the list
    - If the index is 0, unshift a new node to the start of the list
    - Otherwise, using the get method, access the node at the index of index-1
    - Set the next property on that node to be the new node
    - Set the next property on the new node to be the previous node
    - Increment the length 
    - If successful return true otherwise false
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }

    let newNode = new Node(val);
    let pre = this.get(index - 1);
    let current = this.get(index);
    pre.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  // Remove: Removing a node from the Linked List at a specific index
  /* Remove Pseudocode
    - If the index is less than zero or greater than the length, return undefined
    - If the index is the same as the length -1, pop
    - If the index is 0, shift
    - Otherwise, using the get method, access the node at the index - 1
    - Set the next property on that node to be the next of the next node
    - Decrement the length
    - Return the value of the node removed
   */
  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) this.unshift();
    if (index === this.length - 1) this.pop();

    let pre = this.get(index - 1);
    let current = this.get(index);
    let post = this.get(index + 1);
    pre.next = post;
    this.length--;
    return current;
  }

  // Reverse: reversing the Linked List in place!
  /* Reverse Pseudocode
      - Swap the head and tail
      - Create a variable called next
      - Another called pre
      - Create a variable called node and initialize it to the head property
      - Loop through the list 
      - Set the next to be the next property on whatever node is
      - Set the next property on the node to be whatever pre is
      - Set pre to be the value of the node variable
      - Set the node variable to be the value of the next variable
   */
  // Solution (FAILED on my own..)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let pre = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    }
    return this
  }

  printVal() {
    let node = this.head;
    while (node) {
      if (this.length === 0) return null;
      console.log(node.val);
      node = node.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.reverse();
list.printVal();
