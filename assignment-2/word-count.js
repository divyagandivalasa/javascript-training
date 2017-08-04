function countWords(str) {
  var wordCount, updatedString = updateString(str).trim();
  if (updatedString.length != 0 && updatedString != " ") {
    wordCount = updatedString.split(" ").length;
  } else {
    wordCount = updatedString.length;
  }
  return wordCount;
}

function updateString(inputString) {
  //first replace call is to remove the special symbols
  //second replace  call is to remove ectra spaces
  return inputString.replace(/[$-/:-?{-~!"^_`\[\]]/, "").replace().replace(/\s+/g, " ");
}