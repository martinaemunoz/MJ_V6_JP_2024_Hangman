/*
Choose a random word
While the word has not been guessed {
    Show the player their current progress
    Ask the player to enter a letter

    If the player wants to quit the game {
    Exit the game
    }
        else
    If the player's input is more than one character {
    Alert the player to enter only one letter
    }

    else {
        If the letter matches any letter in the word {
            Update the player's progress with the guessed letter
        }
    }
};

Provide feedback to the player based on whether they won or lost
*/

let words = ["song", "forest", "internet", "chair", "professor"];
let hiddenWord = words[Math.floor(Math.random()*words.length)];
let hiddenLetters = [];
for (var i = 0; i < words.length; i++) {
    hiddenLetters[i] = "_";
}

let remainingLetters = hiddenWord.length;

//Game cycle
while (remainingLetters > 0){
    alert(hiddenLetters.join(" ")); // Shows player progress
    let enteredWord = prompt("Start guessing letters or press Cancel to exit the game") // Enters player's hit
    if (enteredWord === null) {
        break; // Exits the game
    } else if (enteredWord.length !== 1) {
        alert("Only one letter allowed per attempt");
    } else {  // Updates hiddenLetters y remainingLetters for every hit
        for (let j = 0; j < hiddenWord.length; j++){
            if (hiddenWord[j] === enteredWord){
                hiddenLetters[j] = enteredWord;
                remainingLetters--;
            }
        }
    }
    // Game ends
}

alert(hiddenLetters.join(" ")); // Shows the answer 
alert("The answer is " + hiddenWord + ". Good job!");