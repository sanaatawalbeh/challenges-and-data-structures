const TNode = require("../TNode");

function findSecondMax(root) {
  if (!root) return "This tree is empty , nothing to return";

  const values = new Set();

  function traverse(TNode) {
    if (!TNode) return null;
    values.add(TNode.value);
    traverse(TNode.left);
    traverse(TNode.right);
  }
  traverse(root);

  if (values.size < 2)
    return "There is only one node in the tree , cannot return the second max value";


  const sorted = Array.from(values).sort((a, b) => b - a);

  return sorted[1];
}

module.exports = findSecondMax;
