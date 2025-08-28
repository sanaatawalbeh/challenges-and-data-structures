const BinaryTree = require("../BinaryTree");
const LeafSum = require("../LeafSum/LeafSum");

describe("leaf Sum Tests", () => {
  test("Test calculating the sum of all leaf nodes in a binary tree using the provided example", () => {
    const tree = new BinaryTree(9);
    tree.insert(8);
    tree.insert(12);
    tree.insert(3);
    tree.insert(7);
    tree.insert(17);
    tree.insert(23);
    tree.insert(4);

    const result = LeafSum(tree.root);
    expect(result).toBe(51);
  });

  test("Test calculating the sum of all leaf nodes in a binary tree using example with negative leaf values", () => {
    const tree = new BinaryTree(9);
    tree.insert(8);
    tree.insert(12);
    tree.insert(3);
    tree.insert(-7);
    tree.insert(-17);
    tree.insert(-23);
    tree.insert(-4);

    const result = LeafSum(tree.root);
    expect(result).toBe(-51);
  });

    test("Test calculating the sum of the only node in the tree", () => {
      const tree = new BinaryTree(9);

      const result = LeafSum(tree.root);
      expect(result).toBe(9);
    });
});
