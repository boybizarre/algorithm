class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // instantiate the new node to the class function
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {

    // split it up so we could either loop from the head or the tail depending on which side the index is closer to
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= Math.floor(this.length / 2)) {
      console.log('Working from start');

      counter = 0;
      current = this.head;

      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      console.log('Working from end');

      counter = this.length - 1;
      current = this.tail;

      while (counter !== index) {
        current = current.prev;
        counter--;
      }
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

    // set the next property of the previous node to the new node created
    // put the new node in-between by connecting its previous property to the  previous node and the next property to the next node
    // also connect the previous property of next node to new node in-between
    // now it is well connected
    let newNode = new Node(val),
      prevNode = this.get(index - 1),
      temp = prevNode.next;

    prevNode.next = newNode;
    (newNode.prev = prevNode), (newNode.next = temp);
    temp.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let removedNode = this.get(index),
      prevNode = removedNode.prev,
      nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    // removedNode.prev.next = removedNode.next, removedNode.next.prev = removedNode.prev;

    (removedNode.next = null), (removedNode.prev = null);

    this.length--;
    return removedNode;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

let list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.push(600);
list.push(700);
list.push(800);
list.push(900);
list.push(1000);
list.push(1100);
list.push(1200);
list.push(1300);

// let first = new Node(50);
// first.next = new Node(100);
// first.next.prev = first;

// console.log(list.unshift(10));
// console.log(list.unshift(130));

// console.log(list.insert(8, 750));
// console.log(list.remove(8));

console.log(list);
console.log(list.print());




// BIG O notation of queues

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)


// Technically searching is O(N/2) but that's still O(N)