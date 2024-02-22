import LetterTile from "./LetterTile";

const GuessBoard = ({ guesses }) => {
  const guessBoard = [];
  for (let i = 0; i < 6; i++) {
    const emptyRow = [];
    for (let j = 0; j < 5; j++) {
      emptyRow.push(" ");
    }
    guessBoard.push(emptyRow);
  }

  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    for (let j = 0; j < guess.length; j++) {
      guessBoard[i][j] = guess[j];
    }
  }

  return (
    <div className="guess-board mb-5">
        {guessBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="guess-row grid grid-cols-5 gap-2 mb-2">
            {row.map((guess, guessIndex) => (
                <LetterTile key={guessIndex} letter={guess} />
            ))}
            </div>
        ))}
    </div>
  );
};

export default GuessBoard;