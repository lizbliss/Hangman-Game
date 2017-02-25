//Global Variables
//Arrays and Variables for holiding data
var wordOptions = ["alien", "android", "beam", "blaster", "cyberspace", "forcefield"];
var selectedWord = "";
var lettersInWord = [];

var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var numGuesses = 9;
var guessesLeft;

//Functions 
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    console.log("letters in the word = ", lettersInWord);
    numBlanks = lettersInWord.length;
    console.log("this is numblanks = ", numBlanks);

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanksAndSuccess with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("-");
    }

    //Change HTML to reflect round confitions

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

}
//This is where we check for a matching letter
function checkLetters(letter) {
    //check if letter exists in code at all
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    console.log("letter good", isLetterInWord);
    //check where in the workd letter exists, and populate our blanksandsuccess array
    if (isLetterInWord) {

        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                console.log("you guessed it = ", selectedWord[i]);
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    //Letter wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);
    console.log("Should be 9 = ", guessesLeft);
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    document.getElementById("message").innerHTML = "";



    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        document.getElementById("message").innerHTML = "You Won! Play Again?";

        //updates the win counter in html 
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();

    } else if (guessesLeft == 0) {
        lossCount++;
        document.getElementById("message").innerHTML = "You lost!";

        //updates the loss counter in html
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}


startGame();
//Register keyclick
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

}
