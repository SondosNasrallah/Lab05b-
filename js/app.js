/* eslint-disable eqeqeq */
'use strict';

let userName = prompt('What is your name?');
alert('Welcome' +' '+ userName);
document.write('Welcome' +' '+ userName);

let score=0;

//Question1
let question1 = prompt('am I from Jordan?');

function q1(uAnswer)
{
  switch (uAnswer.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('Yes, my lovely country');
    score++;
    break;
  case 'NO':
  case 'N':
    alert('You lost a point');
    score--;
    break;
  }
}
q1(question1);


//Question2


let question2 = prompt('Am I working currently?');

function q2(uAnswer2) {
  switch (uAnswer2.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('A wrong answer, I still have no Job :(!');
    break;

  case 'no':
  case 'n':
    alert('correct unfortunatelly! :D');
    score++;
    break;
  }
}
q2(question2);



//Question3


let question3 = prompt('Is My Favorite color Violet?');

function q3(uAnswer3){
  switch (uAnswer3.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('Correct, I am in love with this color!');
    score++;
    break;

  case 'no':
  case 'n':
    alert('wrong answer, Violet is my favorite!');
    break;
  }
}
q3(question3);



// // //Question4

let question4 = prompt('Is my age seems to be more than 25?');
function q4(uAnswer4)
{
  switch (uAnswer4.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('NO! Still 23, Young enough Ha?');
    break;

  case 'no':
  case 'n':
    alert('Exactly, I am 23');
    score++;
    break;
  }
}
q4(question4);


// //Question5

let question5 = prompt('is it correct that my favorite hobby is Drawing?');

function q5(uAnswer5){
  switch (uAnswer5.toLocaleLowerCase()) {
  case 'yes':
  case 'y':
    alert('Definetly wrong, I know nothing about it');
    break;

  case 'no':
  case 'n':
    alert('Correct, My first I admire Reading the most!');
    score++;
    break;
  }
}
q5(question5);


// Question 6

let question6= parseInt(prompt('My number is between 10 to 20 and it is a single number'));
let count = 0;
function sixthQue(userInput) {



for (let i = 0; i < 4; i++) {
  if (userInput > 17) {
    alert('You Missed it, it is less than' + userInput);
    userInput = prompt('Guess again!');
    count++;
  } else if (userInput < 17) {
    alert('You Missed it, it is Higher than ' + userInput);
    userInput = prompt('Guess again!');
    count++;
  } else {
    score++;
    alert('Bravo Your score now is ' + score);
    break;
  }
}
if (count == 4) {
  alert('The number is 17');
}
}
sixthQue (question6);



//Question7

let favFruit = ['APPLE', 'BANANA', 'GRAPES', 'MELON', 'STRAWBERRY', 'ORANGE'];
let answer = prompt('what is my favorite fruit?');
answer = answer.toUpperCase();
let counter = 0;
for (let i = 0; i < 6; i++) {
  if (answer === favFruit[0] || answer === favFruit[1] || answer === favFruit[2] || answer === favFruit[3] || answer ===favFruit[4] || answer === favFruit[5]) {
    alert('Correct ' + answer + ' is one of the favorite fruit');
    score++;
    break;
  } else {
    alert('No ' + answer + ' is not my favorite fruit');
    answer = prompt('Please, Guess again!');
    counter++;
  }
}

if (counter == 6) {
  alert('You have consumed all your guesses and my favorite fruit are the following \nAPPLE, BANANA, GRAPES, MELON, STRAWBERRY, ORANGE');
}






alert(userName + ' Your score is ' + score);

if (score > 4) {
  alert(userName + ' it seems that you are me');
} else if (score <= 4) {
  alert(userName + ' , we must to get to know each other more');
}

