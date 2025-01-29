// write a function to swap two elements in entire linked list
// input: 1->2->3->4->5->6->7->8->9->10
// output: 2->1->4->3->6->5->8->7->10->9
function swapTwoElementsInLinkedList(head) {
  let current = head;
  while (current && current.next) {
    let temp = current.data;
    current.data = current.next.data;
    current.next.data = temp;
    current = current.next.next;
  }
  return head;
}

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(data) {
    let end = new Node(data);
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = end;
  }

  printList() {
    let current = this;
    let result = '';
    while (current) {
      result += current.data + '->';
      current = current.next;
    }
    return result.slice(0, -2);
  }
}

// test the swapTwoElementsInLinkedList function
let head = new Node(1);
for (let i = 2; i <= 10; i++) {
  head.appendToTail(i);
}
console.log(swapTwoElementsInLinkedList(head).printList()); // 2->1->4->3->6->5->8->7->10->9