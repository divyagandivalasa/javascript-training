function compose() {
  var noOfArguments = arguments;
  return function (result) {
    for (var i = noOfArguments.length - 1; i > -1; i--) {
      result = noOfArguments[i].call(this, result);
    }
    return result;
  }
}