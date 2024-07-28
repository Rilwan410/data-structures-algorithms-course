/*
When storing binary heaps in an array, a rule of thumb is:
 For any index of an array n:
 The left Child is stored at 2n + 1
 The right child is at 2n + 2

Formula To Find Child Node In binary heap array: 
 left Index: 2n + 1
 right Index: 2n + 2
 
Formula To Find Parent Node In binary heap array: 
 For any child node at index n:
 Its parents are at index (n-1)/ 2 (floored)

*/