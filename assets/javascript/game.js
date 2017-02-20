//psuedo code steps: 

//1.    Pick a random word.
//2.    Take the player’s guess.
//3.    Quit the game if the player wants to.
//4.    Check that the player’s guess is a valid letter.
//5.    Keep track of letters the player has guessed.
//6.    Show the player their progress.
//7.    Finish when the player has guessed the word.

var words = ['alien', 'android', 'beam', 'blaster', 'cyberspace', 'forcefield'];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";

}

var remainingLetters = word.length;
while (remainingLetters > 0) {
    console.log(answerArray.join(""));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;

    } else if (guess.length !== 1) {
        console.log("Please enter a single letter.");

    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}
console.log(answerArray.join(""));
console.log("Good job! The answer was " + word);
