var readlinesync = require("readline-sync");

var score =0;

function play(question,answer){
  var userAnswer = readlinesync.question(question);

  if (userAnswer===answer){
    console.log("you are right")
  }else{
    console.log("we are wrong")
  }
}
//calling the function

play("where do i work ","amzon");

play("where do i live ", "banglore");

  