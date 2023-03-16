// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // instantiate the new node to the class function
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head,
      newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    // get the index of the node from the get method created earlier
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    // special cases
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    // put the new node in-between by connecting the next property of the previous node to the new node
    // also connect the new node to the next node
    let newNode = new Node(val),
      prevNode = this.get(index - 1),
      temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    // let prevNode = this.get(index - 1);
    // let indexedNode = this.get(index)
    // let temp = indexedNode.next;
    // prevNode.next = temp;

    let previousNode = this.get(index - 1),
      removed = previousNode.next;

    previousNode.next = removed.next;

    this.length--;
    return removed.val;
  }

  reverse() {
    // swap the head and the tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next,
      prev = null;

    // this part is a little tricky
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  // function to print list as an array
  print() {
    let arr = [],
      current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

// console.log(list.reverse());
console.log(list.print())


console.log(list);



// BIG O notation of queues

// Insertion - O(1)
// Removal - it depends... best case O(1) or    worst case O(N)
// Searching - O(N)
// Access - O(N)