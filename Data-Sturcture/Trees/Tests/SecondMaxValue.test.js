const BinaryTree = require("../BinaryTree");
const secondMaxValue = require("../SecondMaxValue/SecondMaxValue");

describe("Second Max Value Tests", () => {
  test("Normal tree with multiple nodes", () => {
    const tree = new BinaryTree(100);
    tree.insert(55);
    tree.insert(180);
    tree.insert(300);
    tree.insert(74);
    tree.insert(150);
    tree.insert(400);

    const result = secondMaxValue(tree.root);
    expect(result).toBe(300);
  });

  test("Tree with only one node", () => {
    const tree = new BinaryTree(5);

    const result = secondMaxValue(tree.root);
    expect(result).toBe(
      "There is only one node in the tree , cannot return the second max value"
    );
  });

  test("Tree with negative values", () => {
    const tree = new BinaryTree(-10);
    tree.insert(-5);
    tree.insert(-18);
    tree.insert(-3);
    tree.insert(-7);
    tree.insert(-18); // duplicate
    tree.insert(-4);

    const result = secondMaxValue(tree.root);
    expect(result).toBe(-4);
  });

  // additional tests

  test("Tree with only two values", () => {
    const tree = new BinaryTree(10);
    tree.insert(5);

    const result = secondMaxValue(tree.root);
    expect(result).toBe(5);
  });

  test("Empty tree", () => {
    const tree = new BinaryTree();

    const result = secondMaxValue(tree.root);
    expect(result).toBe("There is only one node in the tree , cannot return the second max value");
  });
});
