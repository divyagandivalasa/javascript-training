function getMiddle(inputWord) {
  var result, centerIndex = inputWord.length / 2;
  if (inputWord.length % 2 == 0) {
    result = inputWord.charAt(centerIndex - 1) + inputWord.charAt(centerIndex);
  } else {
    result = inputWord.charAt(centerIndex);
  }
  return result;
}