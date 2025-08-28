const TNode = require("../TNode");
const BinaryTree = require("../BinaryTree");

function LeafSum(root) {
  if (!root) return 0;
  
  if (!root.left && !root.right) {
    return root.value;
  }

  return LeafSum(root.left) + LeafSum(root.right);
}

module.exports = LeafSum;
