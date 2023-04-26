/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val)

    if(this.first === null){
      this.first = newNode
      this.last = newNode
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    if(this.first === null || this.tail === null){ // if there is npthing in the queue return error
      throw new Error("error, empty queue")
    }

    const firstVal = this.first.val // saving the value to return 
    this.first = this.first.next; // set the .first to its next one becaus we are removing the first node 
    this.size--; 
    return firstVal
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

    if(this.first === null || this.tail === null){ // if there is npthing in the queue return error
      throw new Error("error, empty queue")
    }

    return this.first.val

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

    if(this.first === null || this.tail === null){
      return true
    }

    return false
  }
}

module.exports = Queue;
