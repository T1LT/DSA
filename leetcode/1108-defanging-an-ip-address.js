/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let res = '';
  for (let i = 0; i < address.length; i++) {
    if (address.charAt(i) === '.') {
      res += '[.]';
    } else {
      res += address.charAt(i);
    }
  }
  return res;
};