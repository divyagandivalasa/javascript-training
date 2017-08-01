function rentalCarCost(numberOfDays) {
  var totalCarRent = numberOfDays * 40;
  if (numberOfDays >= 3 && numberOfDays < 7) {
    totalCarRent -= 20;
  } else if (numberOfDays >= 7) {
    totalCarRent -= 50;
  }
  return totalCarRent;
}