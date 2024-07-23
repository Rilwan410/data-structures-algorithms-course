class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.pre = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing: Adding a node to the end of a Doubly Linked List
  /* Pushing Pseudocode:
  -Create a new node with the value passed to the function
  - If the head property is null set the head and tail to be the newly created node
  - If not, set the property on the tail to be that node
  - Set the previous property on the newly created node to be the tail
  - Set the tail to be the newly created node
  - Increment the length
  - Return the Doubly Linked List
*/
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    newNode.pre = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Popping: Removing a node from the end of the Doubly Linked List
  /* Pop Pseudocode
    - If there is no head, return undefined
    - Store the current tail in a variable to return later
    - if the length is 1, set the head and tail to be null
    - Update the tail to be the previous Node.
    - Set the new tail's next to be null
    - Decrement the length
    - Return the value removed

 */
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      let oldNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldNode;
    } else {
      let oldTail = this.tail;
      this.tail = this.tail.pre;
      this.tail.next = null;
      oldTail.pre = null;
      this.length--;
      return oldTail;
    }
  }

  // Shifting: Removing a node from the beginning of the Doubly Linked List
  /* Shifting Pseudocode:
        - If the length is 0, return undefined
        - Otherwise store the current head property in a variable 
        - If the length is one
            . set the head to be null
            . set the tail to be null
        - Update the head to be the next of the old head
        - Set the head's pre property to  null
        - Set the old head's next to be null
        - Decrement the length 
        - Return the old head
   */
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
    this.head = this.head.next;
    this.head.pre = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
    // <->(1)<->(2)<->(3)<->(4)<->(5)<->
  }

  // Unshifting: Adding a node to the beginning of the Doubly Linked List
  /* Unshifting Pseudocode:
    - Create a new node with the value that is passed in
    if the length is 0:
      -Set the head to be the new node
      -Set the tail to be the new node
    Otherwise:
      -Set the pre property on the head of the list to be the new node
      -Set the next property on the new node to be the head property
      -Update the head to be the new node

   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    // <->(1)<->(2)<->(3)<->(4)<->(5)<->(6)
    this.head.pre = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Get: Accessing a node in a Doubly Linked List by its position
  /* Get Pseudocode:
  - If the index is less than 0 or greater or equal to the length, return null
  - If the index is less than or equal to than half the length of the list:
      - Loop through the list starting from the head and loop towards the middle
      - Return the node once it is found
  - if the index is greater than half the length of the list
      - Loop through the list starting from the tail and loop towards the middle
      - Return the node once it is found    

 */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count;
    let current;
    let middle = Math.floor(this.length / 2);
    if (index > middle) {
      count = this.length - 1;
      current = this.tail;
      while (!(count === index)) {
        current = current.pre;
        count--;
      }
    } else {
      count = 0;
      current = this.head;
      while (!(count === index)) {
        current = current.next;
        count++;
      }
    }
    return current;
  }

  // Set: Replacing the value of a node in a Doubly Linked List
  /* Set Pseudocode:
      - Create a variable which is the result of the get() method at the index passed to the function:
        - If the get method returns a valid node, set the value of that node to be the value passed to the function
        -  Return the value
   */
  set(index, val) {
    let newVal = this.get(index);
    if (newVal) newVal.val = val;
    return !!newVal?.val;
  }

  // Insert: Adding a node in a Doubly Linked List
  /* Insert Pseudocode: 
    - If the index is less than zero or greater than or equal to the length return false
    - If the index is 0, unshift
    - If the index is the same as the length, push
    - Use the get method to access the index -1
    - Set the next and pre properties on the correct nodes to link everything together
    - Increment the length
    - Return true
 */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let newPre = this.get(index - 1);
    let current = newPre.next;
    newPre.next = newNode;
    newNode.pre = newPre;
    newNode.next = current;
    current.pre = newNode;
    this.length++;
    return true;
  }

  // Remove: Removing a node in a Doubly Linked List by a certain position
  /* Removing Pseudocode: 
    - If the index is less than zero or greater than or equal to the length return undefined
    - If the index is 0, shift
    - If the index is the same as the length-1, pop
    - Use the get method to retrieve the item to be removed
    - Update the next and pre properties to remove the found node from the list
    - Decrement the list
    - Return the removed node
 */
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.shift(index);
    if (index === this.length - 1) this.pop(index);
    let indexToRemove = this.get(index);
    indexToRemove.pre.next = indexToRemove.next;
    indexToRemove.next.pre = indexToRemove.pre;
    indexToRemove.next = null;
    indexToRemove.pre = null;
    this.length--;
    return indexToRemove;
  }
  printVal() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11);
list.push(12);
// console.log(list.remove(5))
// console.log(list)
list.printVal();

// <->(1)<->(2)<->(3)<->(4)<->(5)<->(6) //
