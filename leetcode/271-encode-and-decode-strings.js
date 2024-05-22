var encode = (strs, nonASCIICode = String.fromCharCode(1000)) => {
  return strs.join(nonASCIICode);
}

var decode = (strs, nonASCIICode = String.fromCharCode(1000)) => {
  return strs.split(nonASCIICode);
};