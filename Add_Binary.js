/* Given two binary strings a and b, return their sum as a binary string. */

// My Solution

var addBinary = function(a, b) {
  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}
