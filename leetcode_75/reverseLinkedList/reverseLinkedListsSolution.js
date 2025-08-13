function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var reverseList = function(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next;  // save next node
    current.next = prev;          // reverse pointer
    prev = current;               // move prev forward
    current = nextTemp;           // move current forward
  }

  return prev; // New head of reversed list
}

// Helper to print linked list as array
function printList(head) {
  let result = [];
  let temp = head;
  while (temp) {
    result.push(temp.val);
    temp = temp.next;
  }
  return result;
}

// Example usage:

// Create linked list from array for testing
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let head = createLinkedList([1,2,3,4,5]);
console.log("Original:", printList(head));         // [1, 2, 3, 4, 5]

head = reverseList(head);
console.log("Reversed:", printList(head));         // [5, 4, 3, 2, 1]
