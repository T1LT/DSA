// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (const customer of accounts) {
    max = Math.max(calcSum(customer), max);
  }
  return max;
};

const calcSum = (customer) => customer.reduce((acc, el) => acc + el);