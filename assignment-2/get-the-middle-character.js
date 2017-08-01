function getMiddle(inputWord) {
  var centerIndex = inputWord.length / 2;
  if (inputWord.length % 2 == 0) {
    return inputWord.charAt(centerIndex - 1) + inputWord.charAt(centerIndex);
  } else {
    return inputWord.charAt(centerIndex);
  }
}