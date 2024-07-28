/*
Adding to a Max Binary Heap
- Push any new nodes to the back of the array
- "Bubble up" or swap it until it finds it correct position
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  /* Insert Pseudocode
    - Push the value into the values property on the heap
    - Bubble the value up to its correct spot:
        - Create a variable called index which is the length of the values property - 1
        - Create a variable called parentIndex which is the floor of (index-1)/2
        - Keep looping as long as the values elements at the parentIndex is less than the values element at the child index
            - Swap the value of the values element at the parentIndex with the value of the element property at the child index
            - Set the index to be the parentIndex, and start over
   */
  insert(num) {
    this.bubbleUp(this.values, num);
  }
  bubbleUp(arr, insert) {
    arr.push(insert);
    let index = arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (arr[index] > arr[parentIndex]) {
      let temp = arr[parentIndex];
      arr[parentIndex] = arr[index];
      arr[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Removing from a heap
  /*

    - Remove the root
    - Replace with the most recently added
    - Adjust (sink down)
   */
  /* Remove Pseudocode
    - Swap the first value in the values property with the last one
    - Pop from the values property, so you can return the value and the end
    - Have the new root 'sink down' to the correct spot
        - Your parent index starts at 0 (the root)
        - Find the index of the left child : 2 * index + 1 ( make sure its not out of bounds)
        - If the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child
        - The child index you swapped to now becomes the new parent index. 
        - keep looping and swapping until neither child is larger than the element
        - Return the root
   */
  // My solution // passed //
  extractMax() {
    let temp = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[0];
    this.values[0] = temp;

    let root = this.values.pop();
    let index = 0;
    let child = index * 2 + 1;
    let child2 = this.values[index * 2 + 2] ? index * 2 + 2 : child;

    while (
      ((this.values[index] < this.values[child] ||
        this.values[index] < this.values[child2]) &&
        child < this.values.length) ||
      child2 < this.values.length
    ) {
      if (this.values[child] > this.values[child2]) {
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
let heap = new MaxBinaryHeap();
heap.insert(41);
console.log(heap);
