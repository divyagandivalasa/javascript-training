Object.prototype.hash = function (nestedPaths) {
    var paths = nestedPaths.split('.'), result = this;
    for (var i = 0; i < paths.length; ++i) {
        if (!result[paths[i]]) {
            result = undefined;
            break;
        } else {
            result = result[paths[i]];
        }
    }
    return result;
}