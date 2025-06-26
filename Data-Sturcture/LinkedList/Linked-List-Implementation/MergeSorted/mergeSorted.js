const LinkedList = require("../Linkedlist");
const Node = require("../NodeClass");

function mergeSortedLists(list1, list2) {
  if (!list1.head && !list2.head) {
    console.log("Both lists are empty.");
    return new LinkedList();
  }

  const temp = new Node(0);
  let tail = temp;

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    if (current1.data <= current2.data) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  tail.next = current1 || current2;

  const result = new LinkedList();
  result.head = temp.next;
  return result;
}

module.exports = mergeSortedLists;
