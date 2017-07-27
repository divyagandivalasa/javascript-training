function partitionOn(pred, items) {
    var trueValuesArray = [];
    var falseValuesArray = [];
    items.forEach(function (value) {
        if (pred(value)) {
            trueValuesArray.push(value);
        } else {
            falseValuesArray.push(value);
        }
    });
    items.length = 0;
    items.push.apply(items, falseValuesArray.concat(trueValuesArray));
    return falseValuesArray.length;
}