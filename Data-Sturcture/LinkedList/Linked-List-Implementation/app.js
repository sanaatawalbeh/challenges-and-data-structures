const LinkedList = require("./Linkedlist");
// const reverseLinkedList = require("./Reverse/reverse");
const mergeSortedLists = require("./MergeSorted/mergeSorted");
console.log("merges sorted lists when two lists are non-empty");

const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);
list1.add(7);
console.log("list 1 before merging : ");
list1.printList();
console.log();


const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);
console.log("list 2 before merging : ");
list2.printList();
console.log();

const merged = mergeSortedLists(list1, list2);
console.log("list 1 & list 2 after merging : ");
merged.printList();
console.log("-------------------------------------------------------------------------------------------");

console.log("merges sorted lists when one list is empty");
const list3=new LinkedList();
list3.add(25);
list3.add(10);
list3.add(15);
const list4 = new LinkedList();

console.log("list 3 before merging : ");
list3.printList();
console.log();

console.log("list 4 before merging : ");
list4.printList();
console.log();

const mergedl3andl4 = mergeSortedLists(list3, list4);
console.log("list 3 & list 4 after merging : ");

mergedl3andl4.printList();
console.log(
  "-------------------------------------------------------------------------------------------"
);

console.log("merges sorted lists when two lists are empty");
const list5 = new LinkedList();
const list6 = new LinkedList();

console.log("list 5 before merging : ");
list5.printList();
console.log();

console.log("list 6 before merging : ");
list6.printList();
console.log();


console.log("list 5 & list 6 after merging : ");
const mergedl5andl6 = mergeSortedLists(list5, list6);



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
