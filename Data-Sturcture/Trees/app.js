const BinaryTree = require("./BinaryTree");
const BinarySearchTree = require("./BinarySearchTree");

// const Btree = new BinaryTree(10);
// Btree.insert(5);
// Btree.insert(18);
// Btree.insert(3);
// Btree.insert(7);
// Btree.insert(15);
// Btree.insert(4);
// console.log("Structure of Binary Tree (adding from left to right)");
// Btree.print();

// console.log("In order Traversal (left - root - right )");
// Btree.InOrderTraversal(Btree.root);

// console.log("Pre order Traversal (root - left - right )");
// Btree.PreOrderTraversal(Btree.root);

// console.log("Post order Traversal (left - right - root )");
// Btree.PostOrderTraversal(Btree.root);

// console.log(
//   "-------------------------------------------------------------------"
// );

const bst = new BinarySearchTree(50);

bst.add(30);
bst.add(70);
bst.add(75);
bst.add(35);
bst.add(65);
bst.add(25);


console.log(
  "Structure for Binary Search Tree before adding 27 & 64 "
);
bst.print();

console.log(
  "Structure for Binary Search Tree after adding 27 & 64 (adding value (smaller --left bigger --right))"
);
bst.print();

bst.add(27);
bst.add(64);

console.log("Trying to search for value 35 and check if it is exist or not");
console.log(bst.contains(35));
console.log("Trying to search for value 40 and check if it is exist or not");
console.log(bst.contains(40));

console.log("Before remove 64:");
bst.print();
bst.remove(64);

console.log("After remove 64:");
bst.print();

bst.remove(70);
console.log("After remove 70:");
bst.print();
