class Queue {
  queue = [];
  constructor() {
    this.queue = [];
  }

  // enqueue add item to queue at end
  enqueue(item) {
    this.queue.push(item);
    return this.queue;
  }
  // remove it first item from queue dequeue
  dequeue() {
    return this.queue.shift();
  }

  // get length to queue
  getLength() {
    return this.queue.length;
  }

  getPeek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

let q1 = new Queue();

console.log(q1.getLength());
console.log(q1.isEmpty());
console.log(q1.enqueue('Maggi'));
console.log(q1.enqueue('Noodels'));
console.log(q1.enqueue('Choclate'));
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());

// console.log('Peek', q1.getPeek());
// console.log(q1.enqueue('Mango'));
// console.log(q1.enqueue('Apple'));
// console.log(q1.enqueue('Banana'));
// console.log(q1.isEmpty());
// console.log(q1.getLength());
