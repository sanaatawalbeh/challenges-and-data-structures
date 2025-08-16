const TNode = require("./TNode");
const Binarytree = require("./BinaryTree");

class BinarySearchTree extends Binarytree {
  constructor(value = null) {
    super(value);
  }

  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.addHelper(this.root, newNode);
    }
  }

  addHelper(current, newNode) {
    if (newNode.value <= current.value) {
      if (!current.left) {
        current.left = newNode;
      } else {
        this.addHelper(current.left, newNode);
      }
    } else {
      if (!current.right) {
        current.right = newNode;
      } else {
        this.addHelper(current.right, newNode);
      }
    }
  }

  contains(value) {
    return this.containsHelper(this.root, value);
  }

  containsHelper(node, value) {
    if (!node) return false;

    if (node.value === value) return true;

    if (value < node.value) {
      return this.containsHelper(node.left, value);
    } else {
      return this.containsHelper(node.right, value);
    }
  }

  remove(value) {
    this.root = this.removeHelper(this.root, value);
  }

  removeHelper(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this.removeHelper(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeHelper(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.value = successor.value;
      node.right = this.removeHelper(node.right, successor.value);
    }

    return node;
  }
}
module.exports = BinarySearchTree;
