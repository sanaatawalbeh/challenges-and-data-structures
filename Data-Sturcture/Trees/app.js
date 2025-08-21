const BinaryTree = require("./BinaryTree");
const secondMaxValue = require("./SecondMaxValue/SecondMaxValue")
// const BinarySearchTree = require("./BinarySearchTree");


const Btree = new BinaryTree(100);
Btree.insert(55);
Btree.insert(180);
Btree.insert(300);
Btree.insert(74);
Btree.insert(150);
Btree.insert(400);
console.log("Structure of Binary Tree (adding from left to right)");
Btree.print();

const secondMax = secondMaxValue(Btree.root);
console.log("Second Max Value in normal tree:", secondMax);

console.log("--------------------------------------------");

const Btree1 = new BinaryTree(10);
Btree1.insert(5);
Btree1.insert(18);
Btree1.insert(3);
Btree1.insert(7);
Btree1.insert(18);
Btree1.insert(4);
console.log("Structure of Binary Tree (adding from left to right)");
Btree1.print();

const secondMax1 = secondMaxValue(Btree1.root);
console.log("Second Max Value in tree that have duplicate values:", secondMax1);

console.log("--------------------------------------------");
const Btree5 = new BinaryTree(-10);
Btree5.insert(-5);
Btree5.insert(-18);
Btree5.insert(-3);
Btree5.insert(-7);
Btree5.insert(-18);
Btree5.insert(-4);
console.log("Structure of Binary Tree (adding from left to right)");
Btree5.print();

const secondMax5 = secondMaxValue(Btree5.root);
console.log("Second Max Value in tree that have negative values:", secondMax5);

console.log("--------------------------------------------");

const Btree2 = new BinaryTree(10);
Btree2.insert(5);
console.log("Structure of Binary Tree (adding from left to right)");
Btree2.print();

const secondMax2 = secondMaxValue(Btree2.root);
console.log("Second Max Value in tree that have only 2 values:", secondMax2);

console.log("--------------------------------------------");

const Btree3 = new BinaryTree(5);
console.log("Structure of Binary Tree (adding from left to right)");
Btree3.print();

const secondMax3 = secondMaxValue(Btree3.root);
console.log("Second Max Value in tree that have only one node:", secondMax3);

console.log("--------------------------------------------");

const Btree4 = new BinaryTree();
console.log("Structure of Binary Tree (adding from left to right)");

const secondMax4 = secondMaxValue(Btree4.root);
console.log("Second Max Value in empty tree:", secondMax4);




// console.log("In order Traversal (left - root - right )");
// Btree.InOrderTraversal(Btree.root);

// console.log("Pre order Traversal (root - left - right )");
// Btree.PreOrderTraversal(Btree.root);

// console.log("Post order Traversal (left - right - root )");
// Btree.PostOrderTraversal(Btree.root);

// console.log(
//   "-------------------------------------------------------------------"
// );

// const bst = new BinarySearchTree(50);

// bst.add(30);
// bst.add(70);
// bst.add(75);
// bst.add(35);
// bst.add(65);
// bst.add(25);


// console.log(
//   "Structure for Binary Search Tree before adding 27 & 64 "
// );
// bst.print();

// console.log(
//   "Structure for Binary Search Tree after adding 27 & 64 (adding value (smaller --left bigger --right))"
// );
// bst.print();

// bst.add(27);
// bst.add(64);

// console.log("Trying to search for value 35 and check if it is exist or not");
// console.log(bst.contains(35));
// console.log("Trying to search for value 40 and check if it is exist or not");
// console.log(bst.contains(40));

// console.log("Before remove 64:");
// bst.print();
// bst.remove(64);

// console.log("After remove 64:");
// bst.print();

// bst.remove(70);
// console.log("After remove 70:");
// bst.print();
