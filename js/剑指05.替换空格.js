/*
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
*
*
* */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const strArr = Array.from(s);
  let count = 0;

  //compute the number of 'space'
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      count++;
    }
  }

  let left = strArr.length - 1;
  let right = strArr.length + count * 2 - 1;

  while (left >= 0) {
    if (strArr[left] === " ") {
      strArr[right--] = "0";
      strArr[right--] = "2";
      strArr[right--] = "%";
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  return strArr.join("");
};
s = "We are happy.";
console.log(replaceSpace(s));
