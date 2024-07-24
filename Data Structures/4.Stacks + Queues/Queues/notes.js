// Array Queue //

var queue = []

queue.unshift(1)
queue.unshift(2)
queue.unshift(3)
queue.pop()
queue.pop()
queue.pop()
console.log(queue)



/*
- There is no way around re-indexing array values when using a queue; You will either have to use unshift/pop or push/shift
 */