const Queue = require("../queue"); // غيّري المسار حسب مكان ملفك

describe("Queue", () => {
  test("enqueue adds elements correctly", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test("dequeue removes elements correctly", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(3);
    expect(queue.peek()).toBe(4);
  });

  test("peek returns the front element", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.peek()).toBe(10);
  });

  test("isEmpty returns true on empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("isEmpty returns false when queue has items", () => {
    const queue = new Queue();
    queue.enqueue(16);
    expect(queue.isEmpty()).toBe(false);
  });
});
