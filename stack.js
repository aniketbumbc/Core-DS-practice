var Stack = /** @class */ (function () {
  function Stack() {
    this.stack = [];
    this.stack = [];
  }
  Stack.prototype.getLength = function () {
    return this.stack.length;
  };
  Stack.prototype.pushItem = function (push) {
    this.stack.push(push);
    return this.stack;
  };
  Stack.prototype.popItem = function () {
    return this.stack.pop();
  };
  Stack.prototype.peekItem = function () {
    return this.stack[this.stack.length - 1];
  };
  Stack.prototype.isEmpty = function () {
    return this.stack.length === 0;
  };
  return Stack;
})();
var s1 = new Stack();
console.log(s1.getLength());
console.log(s1.isEmpty());
console.log(s1.pushItem('a'));
console.log(s1.pushItem('b'));
console.log(s1.pushItem('C'));
console.log(s1.popItem());
console.log(s1.popItem());
console.log(s1.popItem());
//console.log(s1.peekItem());
// console.log(s1.pushItem('Mango'));
// console.log(s1.pushItem('Apple'));
// console.log(s1.pushItem('Banana'));
// console.log(s1.isEmpty());
// console.log(s1.getLength());
