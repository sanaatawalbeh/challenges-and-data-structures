const LinkedList = require("../Linkedlist");
const reverseLinkedList = require("../Reverse/reverse");

describe("reverseLinkedList function", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("reverses a non-empty list with no duplicate values", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    reverseLinkedList(list);

    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(1);
    expect(list.head.next.next.next).toBeNull();
  });

  test("does not reverse a single-node list", () => {
    list.add(10);

    reverseLinkedList(list); 

    expect(list.head.data).toBe(10);
    expect(list.head.next).toBeNull(); 
  });

  test("does not reverse an empty list", () => {
    reverseLinkedList(list);

    expect(list.head).toBeNull(); 
  });

  test("reverses a list with duplicate values", () => {
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);

    reverseLinkedList(list);

    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(2);
    expect(list.head.next.next.next.data).toBe(1);
    expect(list.head.next.next.next.next).toBeNull();
  });
});
