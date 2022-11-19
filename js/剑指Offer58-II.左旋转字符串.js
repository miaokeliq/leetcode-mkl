/*
* 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：
输入: s = "abcdefg", k = 2
输出: "cdefgab"

示例 2：
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"

*/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let arr = s.split("");
  let length = arr.length;

  reverse(arr, 0, n - 1); // 首先将前n位的字符反转
  reverse(arr, n, length - 1); // 其次再将后面的所有字符反转
  reverse(arr, 0, length - 1); // 最后将所有字符反转，完成所有反转操作
  return arr.join("");
};

var reverse = function (s, start, end) {
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
};

var s = "abcdefg";
var k = 2;
console.log(reverseLeftWords(s, k));
