

/* Make use of the (FAKE) namespaces byeSpeaker and helloSpeaker here. */
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i< names.length; i++) {
    if (names[i].toLowerCase().startsWith('j')) {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();