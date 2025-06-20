const Node = require("./NodeClass");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(data) {
    try {
      if (this.head === null) {
        throw new Error("Cannot remove from an empty list.");
      }

      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }

      let current = this.head;
      while (current.next !== null && current.next.data !== data) {
        current = current.next;
      }

      if (current.next === null) {
        throw new Error(`Value ${data} not found in the list.`);
      }

      current.next = current.next.next;
    } catch (error) {
      console.error("Remove Error:", error.message);
    }
  }

  includes(data) {
    try {
      if (this.head === null) {
        throw new Error("Cannot search in an empty list.");
      }

      let current = this.head;
      while (current !== null) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }

      throw new Error(`Value ${data} not found in the list.`);
    } catch (error) {
      console.error("Includes Error:", error.message);
      return false;
    }
  }

  insertAt(index, data) {
    try {
      if (index < 0) {
        throw new Error("Invalid index");
      }

      const newNode = new Node(data);

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return "Node inserted at index 0";
      }

      let current = this.head;
      let previous = null;
      let i = 0;

      while (current !== null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      if (i === index) {
        newNode.next = current;
        previous.next = newNode;
        return `Node inserted at index ${index}`;
      } else {
        throw new Error("Index out of bounds");
      }
    } catch (error) {
      return error.message;
    }
  }
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data); 
      current = current.next;
    }
    return result;
  }

  printList() {
    if (this.head === null) {
      console.log("This list is empty");
      return;
    }

    let result = "Head -> ";
    let current = this.head;

    while (current !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }

    result += "Null";
    console.log(result);
  }
}

module.exports = LinkedList;
