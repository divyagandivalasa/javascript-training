function add(n) {
    var v = function (x) {
        return add(n + x);
    };
    v.valueOf = function () {
        return n;
    };
    return v;
}