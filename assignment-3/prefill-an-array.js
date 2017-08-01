function prefill(n, v) {
  if(isNaN(n) || !isFinite(n) || typeof(n)=='boolean' || n<0 || n%1!==0){
    throw new TypeError(n + " " + "is invalid");
  }
  else if(n==0){
    return new Array();
  }
  else{
    var arr = Array.apply(null, Array(n));
    return arr.map(function (x, i) { return v });     
  }
}