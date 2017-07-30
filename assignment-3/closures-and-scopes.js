function createFunctions(lengthOfArray) {
  var callbacks = [];

  for (var i = 0; i < lengthOfArray; i++) {
    (function () {
      var temp = i;
      var func = function () { return temp; };
      callbacks.push(func);
    }());
  }

  return callbacks;
}