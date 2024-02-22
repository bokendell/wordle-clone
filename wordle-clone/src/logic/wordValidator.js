export function isValidWord(guess, dictionary) {
    return dictionary.includes(guess);
}

export function getGuessResult(guess, word){
    const guessCharCount = {};
    for (let char of guess) {
        if (guessCharCount[char]) {
            guessCharCount[char]++;
        } else {
            guessCharCount[char] = 1;
        }
    }

    const resultArray = [];
    for (let i = 0; i < word.length; i++) {
        if (guess[i] === word[i]) {
            resultArray.push("C");
            guessCharCount[guess[i]]--;
            if (guessCharCount[guess[i]] === 0) {
                delete guessCharCount[guess[i]];
            }
        }
        else if (guessCharCount[word[i]]) {
            resultArray.push("W");
            guessCharCount[word[i]]--;
            if (guessCharCount[word[i]] === 0) {
                delete guessCharCount[word[i]];
            }
        }
        else {
            resultArray.push("X");
        }
    }
    return resultArray;
}

export function isGuessCorrect(guess, word) {
    return guess === word;
}