# projects related to DOM

## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

``` javascript
console.log("Dhruvi")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    })
})
```

## project 2

``` javascript
const form = document.querySelector("form");
// this usecase will give u empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});
```

## project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');



setInterval(function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //in milisecond
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    previousGuesses.push(guess);
    if (numOfGuesses === 11) {
      displayguess(guess);
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the number in ${numOfGuesses} guesses!`,
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low! Try again!");
  } else if (guess > randomNumber) {
    displayMessage("Too high! Try again!");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
