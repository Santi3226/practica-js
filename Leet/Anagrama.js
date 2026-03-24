/*
Given two strings s and t, return true if t is an of s, and false otherwise.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length==t.length)
  { 
    let i=0;
    while(i<s.length)
      {
        t =t.replace(s[i],"");
        i++;
      }
    if(t=="")return true;
    else return false;
  }
  else {return false;}
  };

console.log(isAnagram("dog","god"));