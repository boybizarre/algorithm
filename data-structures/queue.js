// FIFO
// First In First Out
// Array methods combined as push() and shift() can illustrate but no way around re-indexing
// Same also with unshift() and pop()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // similar to array method push()
  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // similar to array method shift()
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next; // this.first = temp.next;
    this.size--;

    return temp.value;
  }


  // use this method to print the list as an array
  print() {
    let arr = [],
      current = this.first;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }
}


let queue = new Queue();


// console.log(queue.enqueue(10));
// console.log(queue.enqueue(20));
// console.log(queue.enqueue(45));
// console.log(queue.enqueue(77));

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue.print())
console.log(queue);


// BIG O notation of queues

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)