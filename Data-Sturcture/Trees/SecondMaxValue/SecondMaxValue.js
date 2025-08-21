const TNode = require("../TNode");

function findSecondMax(root) {
  if (!root) return "This tree is empty , nothing to return";

  const values = [];

  function traverse(TNode) {
    if (!TNode) return null;
    values.push(TNode.value);
    traverse(TNode.left);
    traverse(TNode.right);
  }
  traverse(root);

  if (values.length < 2)
    return "There is only one node in the tree , cannot return the second max value";

  values.sort((a, b) => b - a);

  if (values[0] === values[1]) {
    return values[0];
  }

  return values[1];
}

module.exports = findSecondMax;
