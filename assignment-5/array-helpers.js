Array.prototype.square = function () {
    return this.map(function (x) {
        return Math.pow(x, 2);
    });
}
Array.prototype.cube = function () {
    return this.map(function (x) {
        return Math.pow(x, 3);
    });
}
Array.prototype.average = function () {
    var sum = this.reduce(function (total, num) {
        return total + num;
    }, 0);
    return sum / this.length;
}
Array.prototype.sum = function () {
    return this.reduce(function (total, num) {
        return total + num;
    }, 0);
}
Array.prototype.even = function () {
    return this.reduce(function (arr, num) {
        if (num % 2 == 0) arr.push(num);
        return arr;
    }, []);
}
Array.prototype.odd = function () {
    return this.reduce(function (arr, num) {
        if (num % 2 != 0) arr.push(num);
        return arr;
    }, []);
}
