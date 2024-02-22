import logo from './logo.svg';
import './App.css';
import GuessBoard from './components/GuessBoard';
import Keyboard from './components/Keyboard';

const guesses = [
  "PENIS"
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GuessBoard guesses={guesses}/>
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
