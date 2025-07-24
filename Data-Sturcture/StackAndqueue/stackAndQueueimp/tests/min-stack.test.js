const MinStack = require("../Min-Stack/MinStack");

describe("MinStack Class", () => {
  test("should return the correct minimum after multiple pushes", () => {
    const minstack = new MinStack();
    minstack.push(5);
    minstack.push(4);
    minstack.push(10);

    let minValue = minstack.getMin();

    expect(minValue).toBe(4);
  });

  test("should update minimum after popping the smallest element", () => {
    const minstack = new MinStack();
    minstack.push(10);
    minstack.push(15);
    minstack.push(5);

    expect(minstack.pop()).toBe(5);

    let minValue = minstack.getMin();
    expect(minValue).toBe(10);
  });

  test("should return the correct minimum after pushing smaller values", () => {
    const minstack = new MinStack();
    minstack.push(15);
    minstack.push(7);
    minstack.push(12);
    minstack.push(3);

    let minValue = minstack.getMin();
    expect(minValue).toBe(3);

    minstack.push(0);

    minValue = minstack.getMin();
    expect(minValue).toBe(0);
  });

  test("should return the correct top after pushing smaller values", () => {
    const minstack = new MinStack();
    minstack.push(15);
    minstack.push(7);
    minstack.push(12);
    minstack.push(3);

    let minValue = minstack.getMin();
    expect(minValue).toBe(3);

    minstack.push(0);

    expect(minstack.topStack()).toBe(0);
  });
});
