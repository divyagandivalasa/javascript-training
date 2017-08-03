function calculate(num) {
  return function (func) {
    return func ? func(num) : num;
  }
}

var zero = calculate(0);
var one = calculate(1);
var two = calculate(2);
var three = calculate(3);
var four = calculate(4);
var five = calculate(5);
var six = calculate(6);
var seven = calculate(7);
var eight = calculate(8);
var nine = calculate(9);

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}
function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}
function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}
function dividedBy(rightOperand) {
  return function (leftOperand) {
    return leftOperand / rightOperand;
  };
}