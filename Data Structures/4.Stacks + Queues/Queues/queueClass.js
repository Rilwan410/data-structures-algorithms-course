class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Enqueue Pseudocode
    - This function accepts a value
    - Create a new node using that value passed to the function
    - If there are no nodes in the queue, set this node to be the first and last property of the queue
    - Otherwise set the next property on the current last to be that node, and then set the last property of the queue to be that node
    - Increment the size 
   */
  enqueue(val){
    let newNode = new Node(val)
    if(this.size === 0){
        this.first = newNode;
        this.last = newNode;
    }else{
        this.last.next = newNode
        this.last = newNode
    }
    return ++this.size
  }


  /* Dequeue Pseudocode
        - If there is no first property, just return null
        - Store the first property in a variable
        - See if the first is the same as the last (check if there is only 1 node).
            - If so, set first and last to be null
   */
  dequeue(){
    if (this.size === 0) return null;
    let temp = this.first;
    if(this.size === 1){
        this.first = null;
        this.last = null;
    }else{
        this.first = this.first.next
    }
    this.size--
    return temp
    // 1 2 3 4 5 6
}
}

let list = new Queue
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.dequeue()
console.log(list)