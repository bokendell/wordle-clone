const LetterTile = ({ letter, onClick }) => {
    return (
        <div className="letter-tile border w-10 h-10 rounded hover:bg-sky-700" onClick={onClick}>
        {letter}
        </div>
    );
    };

export default LetterTile;