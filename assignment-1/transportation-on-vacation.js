function rentalCarCost(numberOfDays) {
  var totalCarRent;
  if(numberOfDays<3){
    totalCarRent = numberOfDays * 40;
  }
  else if(numberOfDays>=3 && numberOfDays<7){
    totalCarRent = (numberOfDays * 40)-20;
  }
  else{
    totalCarRent = (numberOfDays * 40)-50;
  }
  return totalCarRent;
}