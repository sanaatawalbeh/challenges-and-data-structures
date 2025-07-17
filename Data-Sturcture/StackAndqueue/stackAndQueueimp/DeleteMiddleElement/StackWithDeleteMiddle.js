const Stack = require("../stack");

function deleteMiddle(stack) {
  const n = stack.getSize(); 
  if (n === 0) return "Empty stack nothing to remove";

  const middleIndex = n % 2 === 0 ? n / 2 - 1 : Math.floor(n / 2);
 
  if (middleIndex === 0) {
    stack.top = stack.top.next;
    return "The only element in the stack removed successfully";
  }

  let current = stack.top;
  let index = 0;

  while (index < middleIndex - 1 && current.next !== null) {
    current = current.next;
    index++;
  }

  if (current.next && current.next.next) {
    current.next = current.next.next;
  } else if (current.next) {
    current.next = null;
  }
}

module.exports = deleteMiddle;
