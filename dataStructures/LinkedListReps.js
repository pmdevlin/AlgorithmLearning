class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  newHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  newTail(value) {
    if (!this.head) {
      this.newHead(value);
    } else {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    const list = [];
    let count = 0;
    let current = this.head;
    while (count < this.length) {
      list.push(current.data);
      current = current.next;
      count++;
    }
    return list;
  }
}

const list = new LinkedList();
list.newHead(10);
list.newHead(11);

list.newTail(100);

console.log(list.print());
console.log(list);
