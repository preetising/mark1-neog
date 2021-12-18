var readlinesync = require("readline-sync");

var score=0;

 var questionOne= "age is greater then 25 ?.."

 var answerOne = "yes";

// input

var  userAnswer = readlinesync .question (questionOne);

console.log("you enter "+userAnswer)

//processs

if (userAnswer==answerOne){
  //output

  console.log("you are right")
  score = score +1;
  console.log("score is " + score)

} else{
  console.log("you are wrong")
  score = score+1;
  console.log("score is "+ score)
}




var questionTwo= "i am from Noida ?.."

 var answerTwo = " No"

// input

var  userAnswer = readlinesync .question (questionTwo);

console.log("you enter "+userAnswer)

//processs

if (userAnswer === answerTwo){
  //output

  console.log("you are right")
  score = score +1;
  console.log("score is " + score)

} else{
  console.log("you are wrong")
  score = score+1;
  console.log("score is "+ score)
}
