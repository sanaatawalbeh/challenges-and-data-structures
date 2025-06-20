const LinkedList = require("./Linkedlist");
const reverseLinkedList = require("./Reverse/reverse");

const list1 = new LinkedList();
list1.add(5);
list1.add(10);
list1.add(15);

console.log("list with more than 1 nodes:");
console.log("Before Reverse (List 1):");
list1.printList();

reverseLinkedList(list1);

console.log("After Reverse (List 1):");
list1.printList();

console.log("------------------------------------------------------------");

const list2 = new LinkedList();
list2.add(99);

console.log("list with only 1 node:");

console.log("Before Reverse (List 2):");
list2.printList();

reverseLinkedList(list2);

console.log("After Reverse (List 2):");
list2.printList();

console.log("------------------------------------------------------------");

const list3 = new LinkedList();
console.log("list with 0 node:");


reverseLinkedList(list3);

