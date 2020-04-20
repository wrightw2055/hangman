// Take player inputs (attempts)
// update

// Going to target the alphabet
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Create a secret word
const words = [
  'JAVASCRIPT',
  'REACT',
  'FOOTBALL',
  'GIRAFFE',
  'MONTREAL',
  'BASKETBALL',
  'PANTHER',
  'TEXAS',
];
let categories = {
  LANGUAGES: ['JAVASCRIPT', 'REACT'],
  SPORTS: ['FOOTBALL', 'BASKETBALL'],
  ANIMALS: ['GIRAFFE', 'PANTHER'],
  LOCATION: ['MONTREAL', 'TEXAS'],
};
// create a string for attempts
let attempts = 0;

// limit of chances for the player
const limit = 6;

// setting the alphabet to the html & setting the buttons to equal the alphabet

function handleAddButtons() {
  for (i = 0; i <= alphabet.length - 1; i++) {
    const button = document.createElement('button');
    button.innerText = alphabet[i];
    document.querySelector('.letters').appendChild(button);
    button.addEventListener('click', handleButtonClick);
  }
}
handleAddButtons();

let counter = 0;

let secretWord = words[Math.floor(Math.random() * words.length)];
// console.log(secretWord);
onScreenCategories = document.querySelector('.categories');
let secretCategory = '';
for (const category in categories) {
  if (categories[category].indexOf(secretWord) >= 0) {
    secretCategory = category;
    onScreenCategories.innerText = secretCategory;
  }
}
// Remove this console.log!
console.log(secretCategory, secretWord);
const guesses = document.querySelector('.guesses');
const secretWordArray = secretWord.split('');
// Remove this console.log!
console.log(secretWordArray);
guesses.innerHTML = secretWordArray.map((letter) => '_').join(' ');
function handleButtonClick(event) {
  const selectedLetter = event.target.innerText;
  let correctAnswer = false;
  event.target.disabled = true;
  if (counter < 6) {
    for (let i = 0; i < secretWord.length; i++) {
      if (selectedLetter === secretWord[i]) {
        const current = guesses.innerHTML.split(' ');
        current[i] = selectedLetter;
        guesses.innerHTML = current.join(' ');
        correctAnswer = true;
      }
    }
  }
  if (!correctAnswer) {
    counter++;
  }
  checkForWin();
}
// Great job getting the images to display properly!
function checkForWin() {
  const currentValue = guesses.innerHTML.split(' ').join('');
  const buttons = document.querySelectorAll('button');
  if (currentValue === secretWord) {
    buttons.forEach((button) => (button.disabled = true));
    alert('You Win');
  }
  if (counter >= 6) {
    buttons.forEach((button) => (button.disabled = true));
  }
  if (counter == 1) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/head.png')";
  }
  if (counter == 2) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/torso.png')";
  }
  if (counter == 3) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/left-arm.png')";
  }
  if (counter == 4) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/right-arm.png')";
  }

  if (counter == 5) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/right-leg.png')";
  }

  if (counter == 6) {
    document.querySelector('.box').style.backgroundImage =
      "url('images/full-body.png')";
    alert('Try Again Loser');
  }
}
// Your reset button never works because you've got another
// handler that makes all buttons on the page disabled when
// the game ends.
const resetButton = document.querySelector('.resetButton');
const nameReset = 'reset';
resetButton.addEventListener('click', handleResetButton);

function handleResetButton() {
  window.location.reload();
}
// I'd like to see you get this working instead of that alert.
// create a modal that prompts when player win or lose

// const openBtn = document.getElementById('openModal');
// const modal = document.getElementById('modal');
// const close = document.getElementById('close');

// const openModal = () => {
// 	modal.style.display = 'block';
// };

// const closeModal = () => {
// 	modal.style.display = 'none';
// };

// openBtn.addEventListener('click', openModal);

// close.addEventListener('click', closeModal);
// let restart =
// function openModal(event) {
// 	if (currentValue === secretWord) {
// 		modal.style.display = 'block';
// 		alert('You Win');
// 	}
// 	if (counter >= 6) {
// 		modal.style.display = 'block';
// 		alert('Try Again');
// 	}
// }

// // if player presses a letter we want to see if that letter occurs in the secret word if so print to page

// if 'a' is not in secret word, player losses an attempt

// if attempt exceeds the limit player losses the game

// alert player either win or lose
// option to reset the game & or choice another word
