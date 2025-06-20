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

    // ✅ Count repeated values
    const countMap = {};
    current = linkedList.head;

    while (current) {
      const value = current.data;
      countMap[value] = (countMap[value] || 0) + 1;
      current = current.next;
    }

    // ✅ Print repeated values only
    for (const value in countMap) {
      if (countMap[value] > 1) {
        console.log(`Value ${value} occurred ${countMap[value]} times`);
      }
    }
  } catch (err) {
    console.error("Reverse Error:", err.message);
  }
}

module.exports = reverseLinkedList;
