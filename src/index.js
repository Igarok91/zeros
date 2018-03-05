module.exports = function getZerosCount(number) {
  // your implementation
  var i = 1;
  var j = 0;

  while (Math.pow(5, i) < number) {
    j = j + Math.floor(number / Math.pow(5, i));
    i++;
  }
  return j;
}
