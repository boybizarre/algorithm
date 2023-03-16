// LIFO
// Last In First Out
// Array methods push() and pop() can work best without re-indexing
// also shift() and unshift() but the array will re-index the items

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // similar to array method unshift()
  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // similar to array method shift()
  pop() {
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

let list = new Stack();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

// console.log(list.pop());
console.log(list);
console.log(list.print());


// BIG O notation of queues

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)