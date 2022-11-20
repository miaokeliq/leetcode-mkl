/*
* 
* 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:
输入: "abab"
输出: True
解释: 可由子字符串 "ab" 重复两次构成。

示例 2:
输入: "aba"
输出: False

示例 3:
输入: "abcabcabcabc"
输出: True
解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

#*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length == 0) {
    return false;
  }
  let next = getNext(s);

  if (
    next[s.length - 1] != 0 &&
    s.length % (s.length - next(s.length) - 1) == 0
  ) {
    return true;
  }

  return false;
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
    next[i] = j;
  }

  return next;
};
