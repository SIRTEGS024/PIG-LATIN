jQuery(document).ready(function () {
  // Business Logic
  $("form#Translator").submit(function(event) {
    event.preventDefault();
  let sentence = $("input#input1").val()
  let vowelSentence = sentence.charAt(0);
  let quSentence = sentence.slice(0,2);
  let remSentence = sentence.slice(2)
  let remSentence2 = sentence.slice(1)
  
// User Interface Logic 
  let result;
  if (vowelSentence === 'a' || vowelSentence === 'e' || vowelSentence === 'i' || vowelSentence === 'o' || vowelSentence === 'u') {
   result = sentence.concat("acedu")
  }
  else if (quSentence === 'qu' ) {
   result = remSentence.concat(quSentence, "ayac")
  }
  else {
   result = remSentence2.concat(vowelSentence,"ayac")
  }
$("#output").text(result);
});
});


