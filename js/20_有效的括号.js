/*
*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

* */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(")");
    } else if (s[i] == "{") {
      stack.push("}");
    } else if (s[i] == "[") {
      stack.push("]");
    } else if (stack.length == 0 || stack.pop() != s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
