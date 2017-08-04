function cache(complexFunction) {
  var cachedResult = {};
  return function () {
    var cachedFunction = JSON.stringify(arguments);
    if (!cachedResult.hasOwnProperty(cachedFunction)) {
      cachedResult[cachedFunction] = complexFunction.apply(null, arguments);
    }
    return cachedResult[cachedFunction];
  };
}