const { log } = require("console");
const LinkedList = require("./Linkedlist");
const list = new LinkedList();
const emptylist = new LinkedList();

console.log("Add nodes to the end of list and print it:");
list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.add(10);

list.printList();
console.log("");

console.log("printing in empty list result :");
emptylist.printList();

console.log("-------------------------------------");
console.log(
  "Remove a node with specified data  (just first node with that value) , example => list.remove(10):"
);
list.remove(10);
list.printList();

console.log("");
console.log(
  "Try to remove value  not exist in the list , example => list.remove(100):"
);
list.remove(100);

console.log("");
console.log(
  "Try to remove value from empty list , example => emptylist.remove(10):"
);
emptylist.remove(10);

console.log("-------------------------------------");

console.log("check the linkedlist if contain a node with a value = 5 :");
console.log(list.includes(5));
console.log("check the linkedlist if contain a node with a value = 40 :");
console.log(list.includes(40));
console.log("Try to search in an empty list :");
console.log(emptylist.includes(15));

console.log("-------------------------------------");

console.log("Insert a new node in index = 2 and value = 15  :");
list.insertAt(2, 15);
list.printList();

console.log("");
console.log(
  "Try to insert a node at index greater then the length of the list , example => list.insertAt(100, 99) :"
);
console.log(list.insertAt(100, 99));

console.log("");
console.log(
  "Try to insert a node at invalid index (negative index) , example => list.insertAt(-1, 50) :"
);
console.log(list.insertAt(-1, 50));

console.log("-------------------------------------");
