In order to code a Hangman game
1. A random word is picked
2. Each word is entered by the player
3. The player can exit the game when they choose to
4. Check if the entered letter is part of the word
5. Show letters the player has guessed correctly
6. Show error count
7. Give feedback on the process (hits and misses)
8. Finish the game when the player guesses the word.

Data structure Requirements
1. Words of Varying Lengths: The words have different lengths.
2. Access to Individual Letters: You need to be able to access and manage each letter in the word.
3. Reveal Guessed Letters: When the player guesses a letter, the corresponding spaces in the word should be filled with that letter.
4. Unmatched Letters as "_": Letters that haven’t been guessed yet should be shown as "_".

*The letters and "_" symbols of the hidden word will be managed in an array called hiddenLetters. This array will have the same number of elements as the length (number of letters) of the word, and it will be updated with the letters guessed correctly by the player.

*Initially, each letter will be represented by "_". For example, if the secret word is "forest," the hiddenLetters array would start as [" _", "_", "_", "_", "_", "_"]; and when the player guesses all the letters correctly, the array will change to ["f", "o", "r", "e", "s", "t"].

*A variable named remainingLetters will also be used to keep track of the number of letters left to guess. Each time the player guesses a letter correctly, this variable will decrease by 1.

Game cycle
1. Ask the player to enter a letter.
2. Update the answer array if the letter is correct.
3. Check if the player has won or if they're missing letters.
4. Show the updated state of the guessed letters and remaining spaces.