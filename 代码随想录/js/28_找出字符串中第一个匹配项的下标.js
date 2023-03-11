/*
* 实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1: 输入: haystack = "hello", needle = "ll" 输出: 2

示例 2: 输入: haystack = "aaaaa", needle = "bba" 输出: -1

说明: 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//kmp算法
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0;
  }
  let next = getNext(needle);
  console.log("next", next);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] == needle[j]) {
      j++;
    }
    if (j == needle.length) {
      console.log("j", j);
      console.log("need.length", needle.length);
      return i - needle.length + 1;
    }
  }

  return -1;
};

var getNext = function (s) {
  let next = [];
  let j = 0;
  next.push(j);
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] != s[j]) {
      j = next[j - 1];
    }
    if (s[i] == s[j]) {
      j++;
    }
    next.push(j);
  }
  return next;
};

var s1 = "sadbutsad";
var s2 = "sad";
console.log(strStr(s1, s2));
