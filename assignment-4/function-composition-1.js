function compose() {
    var argumentsList = arguments;
    return function (result) {
        for (var i = argumentsList.length - 1; i > -1; i--) {
            result = argumentsList[i].call(this, result);
        }
        return result;
    }
}