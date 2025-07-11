const Stack = require("../stack")

describe("Stack tests", () => {
  test("push adds element to the top of the stack", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.peek()).toBe(30);
  });

  test("pop removes and returns the top element", () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(15);
    expect(stack.pop()).toBe(15);
    expect(stack.peek()).toBe(5);
  });

  test("peek returns top without removing it", () => {
    const stack = new Stack();
    stack.push(42);
    stack.push(48);
    stack.push(54);

    expect(stack.peek()).toBe(54);
    expect(stack.peek()).toBe(54); 
  });

  test("isEmpty returns true for empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test("isEmpty returns false after push", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("pop on empty stack returns message", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe("Cannot remove an element from an empty stack.");
  });

  test("peek on empty stack returns message", () => {
    const stack = new Stack();
    expect(stack.peek()).toBe("The stack is empty, no top value to return.");
  });
});