'use strict';

const againButton = document.querySelector('.again');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let guess = 0;

function init() {
  guessInput.value = 0;
  score.textContent = 20;
  guess = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  number.textContent = '?';

  checkButton.disabled = false;
  guessInput.disabled = false;
}
init();

function reduceScore() {
  score.textContent = String(Number(score.textContent) - 1);
}

function updateMessage(text) {
  message.textContent = text;
}

checkButton.addEventListener('click', function () {
  let guessNumber = guessInput.value;
  if (guessNumber > guess) {
    updateMessage('Too High!');
    reduceScore();
  } else if (guessNumber < guess) {
    updateMessage('Too Low!');
    reduceScore();
  } else {
    updateMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    highScore.textContent = score.textContent;
    number.textContent = guess;

    checkButton.disabled = true;
    guessInput.disabled = true;
  }
});

againButton.addEventListener('click', function () {
  init();
});
