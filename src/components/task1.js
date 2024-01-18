//check whether the string is isogram or not?
let String = "World";
function isIsogram(noor) {
  for (let i = 0; i < noor.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (noor[i] === noor[j]) {
        return true;
      }
    }
  }
  return false;
}

if (isIsogram(String)) {
  console.log(` is an isogram.`);
} else {
  console.log(` is not an isogram.`);
}
