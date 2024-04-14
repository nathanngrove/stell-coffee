export default function uppercaseAllFirstLetters(phrase: string) {
  let newString = "";
  const removeDashes = phrase.replaceAll("-", " ");
  removeDashes
    .split(" ")
    .forEach((word) => (newString += " " + capitalizeFirstLetter(word)));
  return newString;
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
