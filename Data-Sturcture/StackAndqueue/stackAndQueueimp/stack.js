const Node = require("./nodeClass");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (!this.top) return "Cannot remove an element from an empty stack.";
    const popped = this.top;
    this.top = this.top.next;
    return popped.value;
  }

  peek() {
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
}

module.exports = Stack;
