'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secertNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  // document.querySelector('.score').textContent = score;
  displayScore(score);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // No number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');

    // When play win
  } else if (guess === secertNumber) {
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secertNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess too high
  } else if (guess !== secertNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secertNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secertNumber ? 'Too high' : 'Too low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // } else if (guess > secertNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess too low
  // } else if (guess < secertNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start the guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
