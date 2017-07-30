function calculation(num, func) {
  if (func === undefined) {
    return num;
  } else {
    return func(num);
  }
}
function zero(func) {
  return calculation(0, func);
}
function one(func) {
  return calculation(1, func);
}
function two(func) {
  return calculation(2, func);
}
function three(func) {
  return calculation(3, func);
}
function four(func) {
  return calculation(4, func);
}
function five(func) {
  return calculation(5, func);
}
function six(func) {
  return calculation(6, func);
}
function seven(func) {
  return calculation(7, func);
}
function eight(func) {
  return calculation(8, func);
}
function nine(func) {
  return calculation(9, func);
}

function plus(rightOperand) {
  return function (leftOperand) {
    return rightOperand + leftOperand;
  };
}
function minus(rightOperand) {
  return function (leftOperand) {
    return rightOperand - leftOperand;
  };
}
function times(rightOperand) {
  return function (leftOperand) {
    return rightOperand * leftOperand;
  };
}
function dividedBy(rightOperand) {
  return function (leftOperand) {
    return rightOperand / leftOperand;
  };
}