const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = {
      head: null,
      length: 0,
    }
  }

  getUnderlyingList() {
    return this.queue.head;
  }

  enqueue(value) {
    let currentNode = this.queue.head;
    if (this.queue.length === 0) {
      this.queue.head = new Node(value);
    } else {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    this.queue.length += 1;
  }

  dequeue() {
    let currentNode = this.queue.head;
    this.queue.head = currentNode.next;
    this.queue.length -= 1;
    return currentNode.value;
  }
}

module.exports = {
  Queue
};
