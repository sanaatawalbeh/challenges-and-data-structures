const Stack = require("../stack");
const deleteMiddle = require("../DeleteMiddleElement/StackWithDeleteMiddle");

describe("Delete middle element tests ", () => {
  test("Remove middle element from stack that have number of odd elements", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    deleteMiddle(stack);

    expect(stack.getSize()).toBe(4);

    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
  test("Remove middle element from stack that have number of even elements", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.push(60);

    deleteMiddle(stack);

    expect(stack.getSize()).toBe(5);

    expect(stack.pop()).toBe(60);
    expect(stack.pop()).toBe(50);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
  });

  test("Attempt to delete from empty stack", () => {
    const stack = new Stack();

    const result = deleteMiddle(stack);

    expect(result).toBe("Empty stack nothing to remove");
    expect(stack.getSize()).toBe(0);
  });

    test("Delete from stack with only one element", () => {
      const stack = new Stack();
      stack.push(28);

      const result = deleteMiddle(stack);

      expect(result).toBe("The only element in the stack removed successfully");
      expect(stack.getSize()).toBe(0);
    });


});
