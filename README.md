# wordle-clone
A wordle clone designed to be used with react and can be installed via npm


Start game

empty screen of characters

input characters

character is in the wrong place but in the word
character is in the right place and in the word
handle duplicate characters

Reveal character button

got word right end game

got word wrong next turn or if out of turns screen to play again


START
|
V
Generate a random word from the word list
|
V
Display the initial blank word and prompt user for their first guess
|
V
WHILE user has guesses left AND word is not guessed correctly:
|   |
|   V
|   Get user's guess
|   |
|   V
|   Check if guess is valid (5-letter word consisting of alphabetic characters)
|   |   |
|   |   V
|   |   IF valid:
|   |   |   |
|   |   |   V
|   |   |   Compare the guess with the target word
|   |   |   |
|   |   |   V
|   |   |   IF guess is correct:
|   |   |   |   |
|   |   |   |   V
|   |   |   |   Display victory message and the correct word
|   |   |   |   |
|   |   |   |   V
|   |   |   |   END
|   |   |   |
|   |   |   ELSE:
|   |   |       |
|   |   |       V
|   |   |       Update the display with correct guesses and remaining blanks
|   |   |
|   |   ELSE:
|   |       |
|   |       V
|   |       Display error message for invalid guess
|   |
|   V
|   Decrement the number of remaining guesses
|
V
IF user has no remaining guesses:
|   |
|   V
|   Display defeat message and the correct word
|
V
END
