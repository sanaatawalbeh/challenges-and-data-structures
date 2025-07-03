const LinkedList = require("../Linkedlist");
const rotateLeft = require("../Rotate-LinkedList/Rotatate-LinkedList");

describe("rotateLeft function", () => {
  let list1;

  beforeEach(() => {
    list1 = new LinkedList();
  });

  test("rotating list in normal case with k=2", () => {
    list1.add(1);
    list1.add(2);
    list1.add(3);
    list1.add(4);
    list1.add(5);
    list1.add(6);

    list1.head = rotateLeft(list1.head, 2);

    expect(list1.head.data).toBe(3);
    expect(list1.head.next.data).toBe(4);
    expect(list1.head.next.next.data).toBe(5);
    expect(list1.head.next.next.next.data).toBe(6);
    expect(list1.head.next.next.next.next.data).toBe(1);
    expect(list1.head.next.next.next.next.next.data).toBe(2);
    expect(list1.head.next.next.next.next.next.next).toBeNull;

  });
  test("rotating list with k greater than lengyh  k=7", () => {
    list1.add(1);
    list1.add(2);
    list1.add(3);
    list1.add(4);
    list1.add(5);
    list1.add(6);

    list1.head = rotateLeft(list1.head, 7);

    expect(list1.head.data).toBe(2);
    expect(list1.head.next.data).toBe(3);
    expect(list1.head.next.next.data).toBe(4);
    expect(list1.head.next.next.next.data).toBe(5);
    expect(list1.head.next.next.next.next.data).toBe(6);
    expect(list1.head.next.next.next.next.next.data).toBe(1);
    expect(list1.head.next.next.next.next.next.next).toBeNull;
  });

  test("rotating list with k=0", () => {
    list1.add(1);
    list1.add(2);
    list1.add(3);
    list1.add(4);
    list1.add(5);
    list1.add(6);

    list1.head = rotateLeft(list1.head, 0);

    expect(list1.head.data).toBe(1);
    expect(list1.head.next.data).toBe(2);
    expect(list1.head.next.next.data).toBe(3);
    expect(list1.head.next.next.next.data).toBe(4);
    expect(list1.head.next.next.next.next.data).toBe(5);
    expect(list1.head.next.next.next.next.next.data).toBe(6);
    expect(list1.head.next.next.next.next.next.next).toBeNull;
  });
//additional tests
  test("rotating list with k=length", () => {
    list1.add(1);
    list1.add(2);
    list1.add(3);
    list1.add(4);
    list1.add(5);
    list1.add(6);

    list1.head = rotateLeft(list1.head, 6);

    expect(list1.head.data).toBe(1);
    expect(list1.head.next.data).toBe(2);
    expect(list1.head.next.next.data).toBe(3);
    expect(list1.head.next.next.next.data).toBe(4);
    expect(list1.head.next.next.next.next.data).toBe(5);
    expect(list1.head.next.next.next.next.next.data).toBe(6);
    expect(list1.head.next.next.next.next.next.next).toBeNull;
  });

  test("rotating list with one node", () => {
    list1.add(10);


    list1.head = rotateLeft(list1.head, 2);

    expect(list1.head.data).toBe(10);
    expect(list1.head.next).toBeNull();

  });

  
  test("rotating an empty list", () => {

    list1.head = rotateLeft(list1.head, 3);

    expect(list1.head).toBeNull();
  });
  
});