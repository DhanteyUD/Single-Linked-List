const LinkedList = require('./LinkedList');

const List = LinkedList.fromValues(10, 20, 30, 40);
List.print();

List.insertAtHead(50);
List.print();

List.insertAtIndex(2, 60);
List.print();

List.removeHead();
List.print();

List.removeAtIndex(1);
List.print();
