const LinkedList = require("../Linkedlist");
const mergeSortedLists = require("../MergeSorted/mergeSorted");

describe("mergeSortedLists function", () => {
  let list1;
  let list2;

  beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList();
  });

  test("merges sorted lists when one list is empty", () => {
    // list1 is empty, no need to add anything

    list2.add(1);
    list2.add(2);
    list2.add(3);

    const merged = mergeSortedLists(list1, list2);

    expect(merged.head.data).toBe(1);
    expect(merged.head.next.data).toBe(2);
    expect(merged.head.next.next.data).toBe(3);
    expect(merged.head.next.next.next).toBeNull();
  });

  test("merges sorted lists when two lists are empty", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const merged = mergeSortedLists(list1, list2);

    expect(merged.head).toBeNull(); // الناتج لازم يكون فاضي
    expect(consoleSpy).toHaveBeenCalledWith("Both lists are empty."); // لازم تكون الرسالة انطبعت
  });

  test("merges sorted lists when two lists are non-empty", () => {
    // list1 is empty, no need to add anything

    list1.add(5);
    list1.add(10);
    list1.add(15);

    list2.add(2);
    list2.add(3);
    list2.add(20);

    const merged = mergeSortedLists(list1, list2);

    expect(merged.head.data).toBe(2);
    expect(merged.head.next.data).toBe(3);
    expect(merged.head.next.next.data).toBe(5);
    expect(merged.head.next.next.next.data).toBe(10);
    expect(merged.head.next.next.next.next.data).toBe(15);
    expect(merged.head.next.next.next.next.next.data).toBe(20);
    expect(merged.head.next.next.next.next.next.next).toBeNull;
  });
});
