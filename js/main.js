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

// var button = document.createElement("button");
// button.innerHTML = "*Click me to take a survey*";

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);




// button.addEventListener ("click", function() {
//    nissanLoop();
//   });

//   var fs = require('fs');
//   var path = "../output.txt";
//   var data = "eMail";
//   fs.appendFile(path, data, function(error) {
//     if (error){
//          console.error("write error: " + error.message);
//     } else {
//          console.log("successful Write to " + path);
//     }
//  });


 function welcomeUser(){
      var userName = prompt('please type your name!');
      var zText = 1;
      var greeting;

     if (zText == 1){
          greeting = userName + ' Welcome to Import hut!';
     } else if (zText !== 1){
          greeting = ' ERROR! ';
     } else {
          greeting = 'thanks!';
     }

     if (userName == null || ''){
          greeting = 'Welcome to Import hut!'
     }     
     document.write('<h1>'+ greeting + '</h1>');
 }

//  welcomeUser();



 function nissanLoop(){
      var datsun = prompt('do you like Nissan? Y/N').toUpperCase();
      var good;

      while (datsun == 'N') {
           datsun = prompt('Are you sure?? Y/N').toUpperCase();
      } if (datsun == 'Y'){
          good = 'Great choice Champ!'
     }

     if (datsun == null){
          datsun = prompt('you must make your choice! Y/N').toUpperCase();
     }
     // document.write('<h2>' + good + '</h2>');
 }


function passWord(){
     var attempt = 0
     var pass = prompt('Enter Secret Password!');
      
     while (pass !== 'power'){
          console.log(pass)
          if (pass !== 'power') {
               attempt++
          }
          pass = prompt('You need to know the password!' + ' You have used ' + attempt + ' attempts.');
     }
     // if (pass === 'sesame'){

}
// passWord()

function functionOrder(){

     passWord();
     welcomeUser();

}
functionOrder();