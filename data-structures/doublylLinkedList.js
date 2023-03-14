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
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;


    this.length--;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
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


// let first = new Node(50);
// first.next = new Node(100);
// first.next.prev = first;
// console.log(list.pop());

console.log(list);
console.log(list.print());
