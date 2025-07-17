const Stack = require("./stack");
//const Queue = require("./queue");
const deleteMiddle = require("./DeleteMiddleElement/StackWithDeleteMiddle");

//Last in - First out
//--------------------------------------Stack part-------------------------------------------

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
console.log(
  `Odd number of elements in the stack (size: ${stack1.getSize()}) before deleting the middle element:`
);
stack1.printStack();
console.log("After deleting:");
deleteMiddle(stack1);
stack1.printStack();

console.log(
  "-----------------------------------------------------------------"
);

const stack2 = new Stack();
stack2.push(10);
stack2.push(20);
stack2.push(30);
stack2.push(40);
stack2.push(50);
stack2.push(60);
console.log(
  `Even number of elements in the stack (size: ${stack2.getSize()}) before deleting the middle element:`
);
stack2.printStack();
console.log("After deleting:");
deleteMiddle(stack2);
stack2.printStack();

console.log(
  "-----------------------------------------------------------------"
);
const stack3 = new Stack();
stack3.push(10);
console.log("Stack with only one element before deleting the middle element:");
stack3.printStack();
console.log(deleteMiddle(stack3));
console.log(
  "Trying to print after deleting to ensure that the stack is now empty:"
);
stack3.printStack();

console.log(
  "-----------------------------------------------------------------"
);
const stack4 = new Stack();
console.log("Trying to delete from an empty stack:");
console.log(deleteMiddle(stack4));



// console.log(
//   "Removing from the top of the stack and returning the popped value:"
// );
// console.log("poped value = ",stack1.pop());
// console.log("Resulting stack after pop operation:");
// stack1.printStack();
// console.log();

// console.log("Peeking the top value without removing it:");
// console.log("Top value :",stack1.peek());
// console.log("Verifying that peeking doesn't remove any value:");
// stack1.printStack();
// console.log();

// console.log("Checking whether the stack is empty or not (true if it is empty , false if not):");
// console.log(stack1.isEmpty());

// console.log("--------------------------------------------------");
// console.log("Stack with only one element (edge case):");
// const stack2 = new Stack();
// stack2.push(100);

// console.log("Printing a stack with only one element:");
// stack2.printStack();
// console.log();

// console.log("Returning the top value from a single-element stack:");
// console.log("Top value:", stack2.peek());
// console.log();

// console.log("Popping the top value from the stack...");
// const poppedValue = stack2.pop();
// console.log("Popped value:", poppedValue);
// console.log("Resulting stack after pop operation:");
// stack2.printStack();
// console.log();

// console.log("Checking if the stack is empty:");
// console.log(stack2.isEmpty());

// console.log("--------------------------------------------------");
// console.log("Empty stack (edge case):");
// const stack3 = new Stack();

// console.log("Attempting to print an empty stack:");
// stack3.printStack();
// console.log();

// console.log("Attempting to remove an element from an empty stack:");
// console.log(stack3.pop());
// console.log();

// console.log("Attempting to return the top value from an empty stack:");
// console.log(stack3.peek());
// console.log();

// console.log("Checking if the stack is empty:");
// console.log(stack3.isEmpty());
// console.log();

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//First in , first out
//--------------------------------------Queue part-------------------------------------------
// console.log("Queue contains more than one element (edge case):");
// const queue1 = new Queue();

// queue1.enqueue(4);
// queue1.enqueue(5);
// queue1.enqueue(6);
// console.log("Queue after insertion:");
// queue1.printQueue();

// console.log("Inserting more one value to see where it will added:");
// queue1.enqueue(7);
// queue1.printQueue();
// console.log();

// console.log(
//   "Removing from the front of the queue and returning the removed value:"
// );
// console.log("removed value = ", queue1.dequeue());
// console.log("Resulting queue after dequeue operation:");
// queue1.printQueue();
// console.log();

// console.log("Peeking the front value without removing it:");
// console.log("Front value :", queue1.peek());
// console.log("Verifying that peeking doesn't remove any value:");
// queue1.printQueue();
// console.log();

// console.log(
//   "Checking whether the queue is empty or not (true if it is empty , false if not):"
// );
// console.log(queue1.isEmpty());

// console.log("--------------------------------------------------");

// console.log("Queue with only one element (edge case):");
// const queue2 = new Queue();
// queue2.enqueue(200);

// console.log("Printing a queue with only one element:");
// queue2.printQueue();
// console.log();

// console.log("Returning the front value from a single-element queue:");
// console.log("Front value:", queue2.peek());
// console.log();

// console.log("Removing the front value from the queue...");
// const removedValue = queue2.dequeue();
// console.log("Removed value:", removedValue);
// console.log("Resulting queue after dequeue operation:");
// queue2.printQueue()
// console.log();

// console.log("Checking if the queue is empty:");
// console.log(queue2.isEmpty());

// console.log("--------------------------------------------------");
// console.log("Empty queue (edge case):");
// const queue3 = new Queue();

// console.log("Attempting to print an empty queue:");
// queue3.printQueue();
// console.log();

// console.log("Attempting to remove an element from an empty queue:");
// console.log(queue3.dequeue());
// console.log();

// console.log("Attempting to return the front value from an empty queue:");
// console.log(queue3.peek());
// console.log();

// console.log("Checking if the queue is empty:");
// console.log(queue3.isEmpty());
