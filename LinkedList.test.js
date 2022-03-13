const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const List = new LinkedList();
    List.insertAtHead(10);
    const oldHead = List.head;
    List.insertAtHead(20);

    expect(List.head.value).toBe(20);
    expect(List.head.next).toBe(oldHead);
    expect(List.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const List = LinkedList.fromValues(10, 20);

      expect(List.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const List = LinkedList.fromValues(10, 20);

      expect(List.getByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const List = LinkedList.fromValues(10, 20);

      expect(List.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const List = LinkedList.fromValues(10, 20, 30, 40);

      expect(List.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('With index less than 0', () => {
    test('it does not insert anything', () => {
      const List = LinkedList.fromValues(10, 20);
      List.insertAtIndex(-1, 30);

      expect(List.length).toBe(2);
    });
  });

  describe('With index greater than list length', () => {
    test('it does not insert anything', () => {
      const List = LinkedList.fromValues(10, 20);
      List.insertAtIndex(5, 30);

      expect(List.length).toBe(2);
    });
  });

  describe('With index 0', () => {
    test('insert at the head', () => {
      const List = LinkedList.fromValues(10, 20);
      List.insertAtIndex(0, 30);

      expect(List.head.value).toBe(30);
      expect(List.head.next.value).toBe(10);
      expect(List.length).toBe(3);
    });
  });

  describe('With index in the middle', () => {
    test('insert at the given index', () => {
      const List = LinkedList.fromValues(10, 20, 30, 40);
      List.insertAtIndex(2, 50);
      const node = List.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(List.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  test('removes the head', () => {
    const List = LinkedList.fromValues(10, 20, 30);
    List.removeHead();

    expect(List.head.value).toBe(20);
    expect(List.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('With index less than 0', () => {
    test('it does not remove anything', () => {
      const List = LinkedList.fromValues(10, 20);
      List.removeAtIndex(-1);

      expect(List.length).toBe(2);
    });
  });

  describe('With index greater than list length', () => {
    test('it does not remove anything', () => {
      const List = LinkedList.fromValues(10, 20);
      List.removeAtIndex(-1);

      expect(List.length).toBe(2);
    });
  });

  describe('With index 0', () => {
    test('remove the head', () => {
      const List = LinkedList.fromValues(10, 20, 30);
      List.removeAtIndex(0);

      expect(List.head.value).toBe(20);
      expect(List.head.next.value).toBe(30);
      expect(List.length).toBe(2);
    });
  });

  describe('With index in the middle', () => {
    test('remove at the given index', () => {
      const List = LinkedList.fromValues(10, 20, 30, 40);
      List.removeAtIndex(2);
      const node = List.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(List.length).toBe(3);
    });
  });
});
