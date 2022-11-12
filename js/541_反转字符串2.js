/*
*   2022-11-12 15:51
*   给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例 1：
输入：s = "abcdefg", k = 2
输出："bacdfeg"

示例 2：
输入：s = "abcd", k = 2
输出："bacd"
*
* */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  var res = s.split("");
  for (let i = 0; i < res.length; i += 2 * k) {
    if (i + k <= res.length) {
      // reverse(s, i, i+k) //一般来说编程语言自己实现的库函数都是左闭右开，所以这里不包含i+k
      reverse(res, i, i + k - 1);
      continue;
    }
    reverse(res, i, res.length - 1);
  }
  return res.join("");
};

var reverse = function (s, start, end) {
  var j = end;
  for (let i = start; i < j; i++) {
    console.log(i, j);
    [s[i], s[j]] = [s[j], s[i]]; // 注意：这里是字符串，不是数组，不能使用这种方式，应该先将字符串转换为数组，再使用此方法
    j--;
  }
};

//测试用例1
var s = "abcdefg";
var k = 2;

var s1 = "abcd";
var k1 = 2;

console.log(reverseStr(s, k));
