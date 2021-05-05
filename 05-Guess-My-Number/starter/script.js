'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 13;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // When no input
    if (!guess) {
      displayMessage('⛔ No number!');
      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('✨ Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '40rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});