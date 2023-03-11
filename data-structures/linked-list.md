# Linked List

A linked list is a data structure in computer science that consists of a sequence of nodes, where each node stores a value and a reference to the next node in the sequence. Unlike arrays, linked lists do not have a fixed size and can be easily modified by adding or removing nodes.

The first node in a linked list is called the head, and the last node is called the tail. The tail node's reference points to null to indicate the end of the list.

## Example

### Implementation

```ts
class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  size = 0;

  add(data: T) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove(data: T) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
```

In this example, we have two classes - `Node` and `LinkedList`. The `Node` class represents a single node in the linked list, which stores a value (`data`) and a reference to the next node (`next`). The `LinkedList` class is the main implementation of the linked list, which maintains a reference to the head and tail nodes, as well as the size of the list.

The `add()` method adds a new node to the end of the list, and the `remove()` method removes a node with a given value from the list. The `print()` method prints out the values of all nodes in the list.

### Usage

```ts
const myList = new LinkedList<number>();
myList.add(1);
myList.add(2);
myList.add(3);
myList.print(); // Output: 1 2 3

myList.remove(2);
myList.print(); // Output: 1 3
```

In this example, we create a new instance of the LinkedList class and add three numbers to the list using the add() method. We then print out the contents of the list using the print() method.

Next, we remove the number 2 from the list using the remove() method, and print out the contents of the list again. As you can see, the number 2 has been removed from the list, and the remaining numbers are printed out.
