class Stack {
  stack = [];
  constructor() {
    this.stack = [];
  }
  getLength() {
    return this.stack.length;
  }

  pushItem(push) {
    this.stack.push(push);
    return this.stack;
  }

  popItem() {
    return this.stack.pop();
  }

  peekItem() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

let s1 = new Stack();
console.log(s1.getLength());
console.log(s1.isEmpty());
console.log(s1.pushItem('Maggi'));
console.log(s1.pushItem('Noodels'));
console.log(s1.pushItem('Choclate'));
console.log(s1.popItem());
console.log(s1.peekItem());
console.log(s1.pushItem('Mango'));
console.log(s1.pushItem('Apple'));
console.log(s1.pushItem('Banana'));
console.log(s1.isEmpty());
console.log(s1.getLength());
