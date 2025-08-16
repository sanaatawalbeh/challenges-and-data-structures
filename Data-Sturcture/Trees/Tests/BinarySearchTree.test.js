const BinarySearchTree = require("../BinarySearchTree");
const TNode = require("../TNode");

describe("Binary Search Tree", () => {
  let bstree;
  beforeEach(() => {
    bstree = new BinarySearchTree(50);
    bstree.add(30);
    bstree.add(70);
    bstree.add(25);
    bstree.add(35);
    bstree.add(65);
    bstree.add(75);
  });

  test("should add nodes in the correct position", () => {
    expect(bstree.root.value).toBe(50);
    expect(bstree.root.left.value).toBe(30);
    expect(bstree.root.right.value).toBe(70);
    expect(bstree.root.left.left.value).toBe(25);
    expect(bstree.root.left.right.value).toBe(35);
    expect(bstree.root.right.left.value).toBe(65);
    expect(bstree.root.right.right.value).toBe(75);
  });

  test("contains() should return true if value exists", () => {
    expect(bstree.contains(50)).toBe(true);
    expect(bstree.contains(25)).toBe(true);
    expect(bstree.contains(75)).toBe(true);
  });

  test("contains() should return false if value does not exist", () => {
    expect(bstree.contains(10)).toBe(false);
    expect(bstree.contains(99)).toBe(false);
  });

  test("remove() should delete a leaf node", () => {
    bstree.remove(25);
    expect(bstree.contains(25)).toBe(false);
    expect(bstree.root.left.left).toBeNull();
  });

  test("remove() should delete a node with one child", () => {
    bstree.remove(35);
    expect(bstree.contains(35)).toBe(false);
  });

   test("remove() should delete a node with two children", () => {
     bstree.remove(30); 
     expect(bstree.contains(30)).toBe(false);
     expect(bstree.root.left.value).not.toBe(30); 
   });

    test("remove() should delete the root correctly", () => {
      bstree.remove(50);
      expect(bstree.contains(50)).toBe(false);
      expect(bstree.root.value).not.toBe(50);
    });
});
