const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1CharsObj = {};
  const s2CharsObj = {};
  let result = 0;

  for (const char of s1) {
    s1CharsObj[char] ? s1CharsObj[char]++ : s1CharsObj[char] = 1;
  }

  for (const char of s2) {
    if (s1CharsObj[char]) {
      s1CharsObj[char]--;
      s2CharsObj[char] = true;
      result++;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
