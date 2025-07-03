const Node = require("../NodeClass");

function rotateLeft(head, k) {
  //if the list is empty do nothing || if the k =0 do nothing also
  if (head === null || k === 0) return head;
  //calculate the lemght 
  let length = 1;
  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
    length++;
  }
// calculate k if it was negative or greater than length
  if (k < 0) {
    k = Math.abs(k) % length; // تدوير لليمين بمقدار القيمة المطلقة
  } else {
    k = k % length;
  }

  if (k === 0 || k === length) return head;
  let current = head;
  for (let i = 1; i < k; i++) {
    current = current.next;
    //we will walk until k-1
  }
//the newhead equal to the value after we stop in it above
  const newHead = current.next;
  current.next = null;
  //cut the list
  tail.next = head;
  //reconnect the list
  return newHead;
}

module.exports = rotateLeft;

