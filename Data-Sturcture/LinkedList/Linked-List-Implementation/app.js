const LinkedList = require("./Linkedlist");
// const reverseLinkedList = require("./Reverse/reverse");
//const mergeSortedLists = require("./MergeSorted/mergeSorted");

const rotateLeft = require("./Rotate-LinkedList/Rotatate-LinkedList");
console.log("Rotating in normal case (k=2): ");

const list1 = new LinkedList();
list1.add(1);
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(5);


console.log("Before Rotation:");
list1.printList();

list1.head = rotateLeft(list1.head, 2);

console.log("After Rotation:");
list1.printList();
console.log("--------------------------------------------------------------------------");

console.log("Rotating in empty list (k=2): ");
const list2= new LinkedList();

console.log("Before Rotation:");
list2.printList();

list2.head = rotateLeft(list2.head, 2);

console.log("After Rotation:");
list2.printList();

console.log(
  "--------------------------------------------------------------------------"
);

console.log("Rotating when k=0 : ");
const list3 = new LinkedList();

list3.add(10);
list3.add(20);
list3.add(30);
list3.add(40);
list3.add(50);

console.log("Before Rotation:");
list3.printList();

list3.head = rotateLeft(list3.head, 0);

console.log("After Rotation:");
list3.printList();

console.log(
  "--------------------------------------------------------------------------"
);
console.log("Rotating when k=length of list (k=5): ");

const list4 = new LinkedList();

list4.add(10);
list4.add(20);
list4.add(30);
list4.add(40);
list4.add(50);

console.log("Before Rotation:");
list4.printList();

list4.head = rotateLeft(list4.head, 5);

console.log("After Rotation:");
list4.printList();

console.log(
  "--------------------------------------------------------------------------"
);
console.log("Rotating when k=length of list (k=7) : ");

const list5 = new LinkedList();

list5.add(10);
list5.add(20);
list5.add(30);
list5.add(40);
list5.add(50);

console.log("Before Rotation: (k=7)");
list5.printList();

list5.head = rotateLeft(list5.head, 7);

console.log("After Rotation:");
list5.printList();

console.log(
  "--------------------------------------------------------------------------"
);
console.log("Rotating when k=negative value  (k=-3) : ");

const list6 = new LinkedList();

list6.add(10);
list6.add(15);
list6.add(20);
list6.add(25);
list6.add(30);

console.log("Before Rotation: ");
list6.printList();

list6.head = rotateLeft(list6.head, -3);

console.log("After Rotation:");
list6.printList();

// Stack باستخدام Linked List (كائنات فقط)

// console.log("merges sorted lists when two lists are non-empty");

// const list1 = new LinkedList();
// list1.add(1);
// list1.add(3);
// list1.add(5);
// list1.add(7);
// console.log("list 1 before merging : ");
// list1.printList();
// console.log();

// const list2 = new LinkedList();
// list2.add(2);
// list2.add(4);
// list2.add(6);
// console.log("list 2 before merging : ");
// list2.printList();
// console.log();

// const merged = mergeSortedLists(list1, list2);
// console.log("list 1 & list 2 after merging : ");
// merged.printList();
// console.log("-------------------------------------------------------------------------------------------");

// console.log("merges sorted lists when one list is empty");
// const list3=new LinkedList();
// list3.add(25);
// list3.add(10);
// list3.add(15);
// const list4 = new LinkedList();

// console.log("list 3 before merging : ");
// list3.printList();
// console.log();

// console.log("list 4 before merging : ");
// list4.printList();
// console.log();

// const mergedl3andl4 = mergeSortedLists(list3, list4);
// console.log("list 3 & list 4 after merging : ");

// mergedl3andl4.printList();
// console.log(
//   "-------------------------------------------------------------------------------------------"
// );

// console.log("merges sorted lists when two lists are empty");
// const list5 = new LinkedList();
// const list6 = new LinkedList();

// console.log("list 5 before merging : ");
// list5.printList();
// console.log();

// console.log("list 6 before merging : ");
// list6.printList();
// console.log();

// console.log("list 5 & list 6 after merging : ");
// const mergedl5andl6 = mergeSortedLists(list5, list6);

// console.log("list with more than 1 nodes:");
// console.log("Before Reverse (List 1):");
// list1.printList();

// reverseLinkedList(list1);

// console.log("After Reverse (List 1):");
// list1.printList();

// console.log("------------------------------------------------------------");

// const list2 = new LinkedList();
// list2.add(99);

// console.log("list with only 1 node:");

// console.log("Before Reverse (List 2):");
// list2.printList();

// reverseLinkedList(list2);

// console.log("After Reverse (List 2):");
// list2.printList();

// console.log("------------------------------------------------------------");

// const list3 = new LinkedList();
// console.log("list with 0 node:");

// reverseLinkedList(list3);

// console.log("------------------------------------------------------------");

// const list4 = new LinkedList();
// list4.add(5);
// list4.add(10);
// list4.add(15);
// list4.add(5);
// list4.add(10);
// list4.add(15);
// list4.add(20);

// console.log("List with multiple nodes, including duplicated values:");
// console.log("Before Reverse (List 4):");
// list4.printList();

// reverseLinkedList(list4);

// console.log("After Reverse (List 4):");
// list4.printList();
