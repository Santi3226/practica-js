/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /*let reg = new RegExp(p);
  if (p.includes('*') || p.includes('.')) return reg.test(s);
  else return p===s;*/
  var regex = new RegExp('^' + p + '$', 'm'); //m hace la coincidencia exacta - multilinea
  return regex.test(s);
};

console.log(isMatch('aa', 'a'));
/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

Return a boolean indicating whether the matching covers the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

*/
