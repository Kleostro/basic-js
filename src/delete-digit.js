const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nToStr = n.toString();
  let max = -1;

  [...nToStr].forEach((_, i) => {
    const numbersStr = nToStr.slice(0, i) + nToStr.slice(i + 1);
    max = Math.max(max, parseInt(numbersStr));
  });

  return max;
}

module.exports = {
  deleteDigit
};
