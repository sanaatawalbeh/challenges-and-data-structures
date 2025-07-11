const Node = require("./nodeClass");

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.front === null) {
      this.front = this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
  }
  dequeue() {
    if (!this.front) return "Cannot remove an element from an empty queue.";
    const removed = this.front;
    this.front = this.front.next;
    if (!this.front) this.end = null;
    return removed.value;
  }

  peek() {
    if (!this.front) return "The queue is empty, no front value to return.";
    return this.front.value;
  }

  isEmpty() {
    if (this.front) {
      return false;
    } else {
      return true;
    }
  }

  printQueue() {
    if (!this.front) {
      console.log("This queue is empty, nothing to print.");
      return;
    }
    let current = this.front;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("front ->", values.join(" -> "), "-> end");
  }
}

module.exports = Queue;
