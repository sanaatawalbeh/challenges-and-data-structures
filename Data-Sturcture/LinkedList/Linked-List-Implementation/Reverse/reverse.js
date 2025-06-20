function reverseLinkedList(linkedList) {
  try {
    if (linkedList.head === null) {
      throw new Error("The list is empty. Nothing to reverse.");
    }

    if (linkedList.head.next === null) {
      throw new Error("The list has only one node. No need to reverse.");
    }

    let prev = null;
    let current = linkedList.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    linkedList.head = prev;
    console.log("The list has been reversed successfully.");
  } catch (err) {
    console.error("Reverse Error:", err.message);
  }
}

module.exports = reverseLinkedList;
