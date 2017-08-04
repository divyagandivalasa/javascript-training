function prefill(lengthOfArray, value) {
  var result;
  if (isNaN(lengthOfArray) || !isFinite(lengthOfArray) || typeof (lengthOfArray) == 'boolean' || lengthOfArray < 0 || lengthOfArray % 1 !== 0) {
    throw new TypeError(lengthOfArray + " " + "is invalid");
  } else if (lengthOfArray == 0) {
    result = new Array();
  } else {
    var arr = Array.apply(null, Array(lengthOfArray));
    result = arr.map(function (x, i) { return value });
  }
  return result;
}