const Keyboard = () => {
    const handleGuess = (letter) => {
        console.log(letter);
    }

    const keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
    ];

    return (
        <div className="keyboard flex flex-col items-center justify-center">
            {keyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="guess-row flex gap-2 mb-2">
                {row.map((keyTile, keyTileIndex) => (
                    <div key={keyTileIndex} className={`letter-tile border rounded hover:bg-sky-700 ${keyTile === "ENTER" || keyTile === "DELETE" ? 'w-auto px-1 py0.5' : 'w-10 h-10'}`} onClick={() => handleGuess(keyTile)}>
                    {keyTile}
                    </div>
                ))}
                </div>
            ))}
        </div>
    );
    };

export default Keyboard;