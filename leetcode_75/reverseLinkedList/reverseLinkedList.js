

















/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }


function createLinkedList(arr) {
  if (arr.length === 0) return null; 

   let head = null;


   for (let i = 0; i < arr.length; i++) {
    
  let current = new ListNode(arr[i]);
    
    current.next = head;
    console.log('createLinkedList:', current)
    head = current
  }
console.log('createLinkedList:', head)

  return head;
}

var printList = function(head) {

 let current = head;
  let result = "";
  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }
  result += "null";
  console.log(result);
    
};




var reverseList = function(head) {

 let current = head;
  let result = [];
  while (current) {
    result += current.val + ",";
    current = current.next;
  }
  result += "null";
  console.log(result);
    
};


let head = createLinkedList([1, 2, 3, 4, 5]);


printList(head);
reverseList(head);