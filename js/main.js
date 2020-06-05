'use strict'

var button = document.createElement("button");
button.innerHTML = "*Click me to take a survey*";

var body = document.getElementById("button");
body.appendChild(button);

button.addEventListener ("click", function() {
   nissanLoop();
  });





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
      var greeting = 'Welcome to Import hut!'


     if (userName !== null || userName !== ''){
          greeting = userName + ', ' + greeting;

     }     
     document.getElementById('greeting').innerHTML=('<h1>'+ greeting + '</h1>');
 }




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
     document.getElementById('finale').innerHTML= good;
     // document.write('<h2>' + good + '</h2>');
 }


function passWord(){
     var attempt = 1;
     var pass = prompt('Enter Secret Password!');
      
     while (pass !== 'power'){
          pass = prompt('You need to know the password!' + ' You have ' + (5-attempt) + ' attempts remaining');
          attempt++;
          if (attempt == 5){
               document.getElementsByTagName('body')[0].innerHTML=('<h1> you should know the password </h1>');
               break;
          }
     }
     if (pass === 'power'){
          welcomeUser();

     }


}


     passWord();


