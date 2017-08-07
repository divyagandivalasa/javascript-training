function isSantaClausable(obj) {
    var result;
    if (typeof obj.sayHoHoHo === 'function' && typeof obj.distributeGifts === 'function' && typeof obj.goDownTheChimney === 'function') {
        result = true;
    } else {
        result = false;
    }
    return result;
}