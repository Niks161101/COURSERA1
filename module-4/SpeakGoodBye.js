(function(window){
  var sayBye={};
  var speakWord = "Good Bye";
  sayBye.speak=function(name){
    console.log(speakWord+" "+name);
  }
  window.sayBye=sayBye;
})(window);

