var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
        this.queue = [];
    }
    // enqueue add item to queue at end
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
        return this.queue;
    };
    // remove it first item from queue dequeue
    Queue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    // get length to queue
    Queue.prototype.getLength = function () {
        return this.queue.length;
    };
    Queue.prototype.getPeek = function () {
        return this.queue[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    return Queue;
}());
var q1 = new Queue();
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
