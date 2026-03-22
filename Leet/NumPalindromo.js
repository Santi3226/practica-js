/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();
  if (x.length % 2 == 0) {
    for (i = 0; i <= x.length / 2; i++) {
      if (x[i] !== x[x.length - i - 1]) {
        return false;
      }
    }
    return true;
  } else {
    for (i = 0; i < x.length / 2 - 0.5; i++) {
      if (x[i] !== x[x.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
};

console.log(isPalindrome(13121));
