// Linked list class constructor ...
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Funtion to insert at head ...
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  // Funtion to get index...
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // Funtion to insert at index ...
  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  // Function to remove head ...
  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  // Funtion to remove at index ...
  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  // To print result in console using 'node app.js' ...
  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output} null`);
  }
}

// Class for linked list node ...
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Function for continuous interation without breaking the code ...
LinkedList.fromValues = function (...values) {
  const List = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    List.insertAtHead(values[i]);
  }
  return List;
};

module.exports = LinkedList;
