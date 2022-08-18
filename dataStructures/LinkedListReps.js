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
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
list.newTail(3);
list.newHead(2);
list.newHead(1);
//list.reverse();
console.log(list);
