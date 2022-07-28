const ftoc = function(f) {
  let ans = ((f-32)*5/9);
  (!Number.isInteger(ans)) ? ans = ans.toFixed(1) : ans = ans;
  return +ans;
};

const ctof = function(c) {
  let ans = (c*9/5+32);
  (!Number.isInteger(ans)) ? ans = ans.toFixed(1) : ans = ans;
  return +ans;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
