var Cat = (function () {
    var catArray = [];
    function Cat(name, weight) {
        var _weight = weight;
        if (!name || !weight) {
            throw new Error("input not ccorrect");
        } else {
            this.name = name;
            this.weight = _weight;
            catArray.push(this);
        }

        Object.defineProperty(this, "weight", {
            get: function () {
                return _weight;
            },
            set: function (newWeight) {
                _weight = newWeight;
            }
        });
    }
    Cat.averageWeight = function () {
        var sum = catArray.reduce(function (total, catObj) { return total + catObj.weight; }, 0);
        return sum / catArray.length;
    }
    return Cat;
})();