const BinaryTree = require("../BinaryTree");
const TNode = require("../TNode");

describe("BinaryTree", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree(10);
    tree.insert(5);
    tree.insert(18);
    tree.insert(3);
    tree.insert(7);
    tree.insert(15);
    tree.insert(4);
  });

  test("In-order traversal should visit nodes in correct order", () => {
    const result = [];
    const orginalLog = console.log;
    console.log = (value) => result.push(value);

    tree.InOrderTraversal(tree.root);

    console.log = orginalLog;
    expect(result).toEqual([3, 5, 7, 10, 15, 18, 4]);
  });

  test("Pre-order traversal should visit nodes in correct order", () => {
    const result = [];
    const orginalLog = console.log;
    console.log = (value) => result.push(value);

    tree.PreOrderTraversal(tree.root);

    console.log = orginalLog;
    expect(result).toEqual([10, 5, 3, 7, 18, 15, 4]);
  });

  test("Post-order traversal should visit nodes in correct order", () => {
    const result = [];
    const orginalLog = console.log;
    console.log = (value) => result.push(value);

    tree.PostOrderTraversal(tree.root);

    console.log = orginalLog;
    expect(result).toEqual([3, 7, 5, 15, 4, 18, 10]);
  });
  
});
