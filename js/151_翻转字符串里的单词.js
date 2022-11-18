/*
给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

#*
* */

/**
 *  js中反转数组的库函数为 reverse(),是将原数组反转
 * @param {string}
 * @return {string}
 */
var reverseWords = function (s) {
  var strArray = s.split("");
  removeExtraSpaces(strArray);
  //首先翻转整体数组
  reverse(strArray, 0, strArray.length - 1);

  // reverse each word
  let start = 0;
  for (let i = 0; i <= strArray.length; i++) {
    if (strArray[i] == " " || i == strArray.length) {
      reverse(strArray, start, i - 1);
      start = i + 1;
    }
  }

  return strArray.join("");
};

var removeExtraSpaces = function (s) {
  let slow = 0;
  for (let fast = 0; fast < s.length; fast++) {
    if (s[fast] != " ") {
      if (slow != 0) {
        s[slow++] = " ";
      }
      while (s[fast] != " " && fast < s.length) {
        s[slow] = s[fast];
        slow++;
        fast++;
      }
    }
  }
  s.length = slow; // 移除后面多余空格，因为slow最后是指向最后一个单词的最后一个字母的后一个位置，所以slow的值和length相等
};

var reverse = function (s, start, end) {
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
};
var s = "  hello world!  ";

console.log(reverseWords(s));
