'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  messageEl.textContent = 'Start guessing...';
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    // check if guess is equal to the secret number
    if (guess === secretNumber) {
      messageEl.textContent = '🎉 Correct Number!';
      bodyEl.style.backgroundColor = '#60b347';
      numberEl.style.width = '30rem';
      numberEl.textContent = secretNumber;
      if (score > highScoreEl.textContent) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
    }

    // check if guess is grater than the secret number
    else {
      messageEl.textContent =
        guess < secretNumber ? '📉 Too low!' : '📈 Too high!';
      score--;
      scoreEl.textContent = score;
    }
  } else {
    score = 0;
    scoreEl.textContent = score;
    messageEl.textContent = '💥 You lost the game!';
  }
  // console.log(document.querySelector('.guess').value);
});
