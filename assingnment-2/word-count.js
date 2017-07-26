function countWords(str) {
  var updatedString = updateString(str).trim();
  if (updatedString.length != 0 && updatedString != " ") {
    return updatedString.split(" ").length;
  }
  else {
    return 0;
  }
};

function updateString(inputString) {
  return inputString.replace(/[$-/:-?{-~!"^_`\[\]]/, "").replace().replace(/\s+/g, " ");
};