'use strict'

console.log('this file is working');

// funtion(myFunction)
//     var txt;
//     var person = prompt("Enter your email for contact back:, 'email@deltastore.com');
//      if (person == null || person == "")
//         txt = "User cancelled input";
//     else
//         text = "Thank you " + person + " we'll get in touch soon!";
//     document.getElementById('demo').innerHTML = txt;

var button = document.createElement("button"); {
button.innerHTML = "*Click me to leave your email*";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

}



button.addEventListener ("click", function() {
   var eMail = prompt("Please enter your email and date visited:");
  });

  var fs = require('fs');
  var path = "../output.txt";
  var data = "eMail";
  fs.appendFile(path, data, function(error) {
    if (error){
         console.error("write error: " + error.message);
    } else {
         console.log("successful Write to " + path);
    }
 });
