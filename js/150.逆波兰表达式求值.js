/*
*根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

注意 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

 

示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
示例 2：

输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
示例 3：

输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22*/

/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "/" ||
      tokens[i] === "*"
    ) {
      let num1 = stack.pop();
      let num2 = stack.pop();
      if (tokens[i] === "+") stack.push(num2 + num1);
      if (tokens[i] === "-") stack.push(num2 - num1);
      if (tokens[i] === "*") stack.push(num2 * num1);
      if (tokens[i] === "/")
        stack.push(
          num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1)
        );
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack.pop();
};

var tokens = ["4", "13", "5", "/", "+"];
console.log(Math.floor(-7.004));
console.log(evalRPN(tokens));
