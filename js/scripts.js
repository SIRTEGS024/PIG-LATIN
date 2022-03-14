jQuery(document).ready(function () {
  // Business Logic
  let sentence = prompt("Enter a sentence:");
  let vowelSentence = sentence.charAt(0);
  let quSentence = sentence.slice(0,2);
  let remSentence = sentence.slice(2)
  let remSentence2 = sentence.slice(1)
  if (vowelSentence === 'a' || vowelSentence === 'e' || vowelSentence === 'i' || vowelSentence === 'o' || vowelSentence === 'u') {
    alert(sentence.concat("acedu"))
  }
  else if (quSentence === 'qu' ) {
    alert(remSentence.concat(quSentence, "ayac"))
  }
  else {
    alert(remSentence2.concat(vowelSentence,"ayac"))
  }
});
// User Interface Logic

