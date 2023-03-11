/*
* 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 */
var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.length;
  size--;
  while (size--) {
    this.queue.push(this.queue.shift());
  }
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let x = this.pop();
  this.queue.push(x);
  return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
