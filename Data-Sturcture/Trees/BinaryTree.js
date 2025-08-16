const TNode = require("./TNode");

class BinareTree {
  constructor(root) {
    this.root = new TNode(root);
  }

  insert(value) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();

      // جرب نحط اليسار
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      // جرب نحط اليمين
      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  //left-root-right
  InOrderTraversal(node) {
    if (!node) return;

    this.InOrderTraversal(node.left);
    console.log(node.value);
    this.InOrderTraversal(node.right);
  }

  //root - left - right
  PreOrderTraversal(node) {
    if (!node) return;

    console.log(node.value);
    this.PreOrderTraversal(node.left);
    this.PreOrderTraversal(node.right);
  }

  //left- right - root
  PostOrderTraversal(node) {
    if (!node) return;

    this.PostOrderTraversal(node.left);
    this.PostOrderTraversal(node.right);
    console.log(node.value);
  }

  print(node = this.root, space = 0, levelSpace = 5) {
    if (!node) return;
    space += levelSpace;
    this.print(node.right, space);
    console.log(" ".repeat(space - levelSpace) + node.value);
    this.print(node.left, space);
  }
}
module.exports = BinareTree;
