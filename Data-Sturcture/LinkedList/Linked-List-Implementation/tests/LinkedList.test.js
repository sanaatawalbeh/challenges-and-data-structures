const LinkedList = require("../Linkedlist");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("add() adds node to the end of the list", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  test("remove() remove a node value ", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
  });

  test("includes(value) return true if the value exist in the list and false if not", () => {
    list.add(6);
    list.add(7);

    expect(list.includes(6)).toBe(true);
    expect(list.includes(10)).toBe(false);
  });

  test("insertAt() insert a value at a specific index ", () => {
    list.add(1);
    list.add(3);
    list.insertAt(1, 2);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  //Additional test 

  test("insertAt() returns error message for out-of-bounds index", () => {
    list.add(1);

    const result = list.insertAt(99, 5);
    expect(result).toBe("Index out of bounds");
  });
  

  test("printList() works on non-empty list",()=>{
    list.add(10)
    list.add(20);
    list.add(30);

    console.log = jest.fn();
    list.printList();

    expect(console.log).toHaveBeenCalledWith("Head -> 10 -> 20 -> 30 -> Null");
  })

  test("printList() works on empty list",()=>{
    console.log =jest.fn();
    list.printList();

    expect(console.log).toHaveBeenCalledWith("This list is empty");
    

  })
});
