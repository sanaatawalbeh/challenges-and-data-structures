const Node = require("../nodeClass");

class MinStack {
  constructor() {
    this.top = null;
    this.minTop = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    if (!this.minTop || value <= this.minTop.value) {
      const minNode = new Node(value);
      minNode.next = this.minTop;
      this.minTop = minNode;
    }
  }

  pop() {
    if (!this.top) return "Cannot remove an element from an empty stack.";
    const popped = this.top;
    this.top = this.top.next;
    if (this.minTop && popped.value === this.minTop.value) {
      this.minTop = this.minTop.next;
    }
    return popped.value;
  }

  topStack() {
    if (!this.top) return "The stack is empty, no top value to return.";
    return this.top.value;
  }

  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }

  printStack() {
    if (this.top === null) {
      console.log("This stack is empty, nothing to print.");
      return;
    }
    let current = this.top;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("top ->", values.join(" -> "), " -> buttom");
  }

  getSize() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getMin() {
    if (!this.minTop) return "This stack is empty, no minimum value to return";
    return this.minTop.value;
  }
}

module.exports = MinStack;
