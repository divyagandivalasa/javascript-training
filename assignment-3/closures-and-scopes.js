function createFunctions(lengthOfArray) {
  var callbacks = [];
  for (var i = 0; i < lengthOfArray; i++) {
    (function (x) {
      var func = function () { return x; };
      callbacks.push(func);
    }(i));
  }
  return callbacks;
}