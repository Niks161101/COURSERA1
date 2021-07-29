(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Nikita","Angy","YourName"];
for (var i=0;i<names.length;i++) {
  var first = names[i].charAt(0).toLowerCase();
  if (first=='j') {
     sayBye.speak(names[i]);
  } else {
    sayHello.speak(names[i]);
  }
}
})();