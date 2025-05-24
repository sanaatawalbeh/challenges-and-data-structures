function ReverseCharacters(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(ReverseCharacters("heblawat"));
console.log(ReverseCharacters("javaScript"));
console.log(ReverseCharacters("elyts"));
console.log(ReverseCharacters("nadroj"));
console.log(ReverseCharacters("abc564"));

