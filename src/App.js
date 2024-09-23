import "./App.css";
import Header from "./components/Header";
import { Words } from "./components/Words";
import Alphabet from "./components/Alphabet";
import { useState, useEffect } from "react";
import NewModal from "./components/NewModal";
import LoseModal from "./components/LoseModal";
import RulesModal from "./components/Rules";

// creating an array with the names of the images used
const image = [
  `${process.env.PUBLIC_URL}/image/img1.PNG`,
  `${process.env.PUBLIC_URL}/image/img2.PNG`,
  `${process.env.PUBLIC_URL}/image/img3.PNG`,
  `${process.env.PUBLIC_URL}/image/img4.PNG`,
  `${process.env.PUBLIC_URL}/image/img5.PNG`,
  `${process.env.PUBLIC_URL}/image/img6.PNG`,
  `${process.env.PUBLIC_URL}/image/img7.PNG`,
];

function App() {
  // setting state
  let [word, setWord] = useState("");
  let [hiddenWord2, setHiddenWord2] = useState("");
  let [wrongGuesses, setWrongGuesses] = useState("");
  let [newGame, setNewGame] = useState(false);
  let [index, setIndex] = useState(0);

  // function to restart the game by resetting the state to original values
  function handleRestart() {
    setWord("");
    setHiddenWord2("");
    setWrongGuesses("");
    setNewGame(false);
    setIndex(0);
  }

  // function to get the word the player needs to guess
  function getWord(items) {
    // setting the state
    setWord(items);
    setHiddenWord2(items.split("").fill("_").join(""));
    setNewGame(true);
  }

  // function to get the letter that the player inputs
  function handleLetter(item) {
    // checking if the word contains the letter the player inputs
    if (word.includes(item)) {
      //empty array to store the guesses
      let guess = [];
      let newHidden = hiddenWord2.split("");
      // looping through the word
      for (let i = 0; i < word.length; i++) {
        // if word[i] === the letter they input, push the letter to guess array
        if (word[i] === item) {
          guess.push(item);
        } else if (newHidden[i] !== "_") {
          guess.push(newHidden[i]);
        } else {
          guess.push("_");
        }
      }

      setHiddenWord2(guess.join(""));
    } else {
      wrongGuesses += `${item} `;
      setWrongGuesses(wrongGuesses);
      setIndex(++index);
      // if user gets 6 guesses wrong, a modal will pop up telling them they have lost
      if (wrongGuesses.length >= 12) {
        openLose();
      }
    }
  }

  //function for modal when player wins the game
  function openModal() {
    const work = document.getElementById("win-dialog");
    work.showModal();
  }

  function closeAll() {
    document.getElementById("win-dialog").close();
    document.getElementById("lose-dialog").close();
    document.getElementById("rules-dialog").close();
  }

  // function for modal when player loses
  function openLose() {
    const showLose = document.getElementById("lose-dialog");
    showLose.showModal();
  }

  // function for modal when player clicks on "how to play"
  function openRules() {
    const showRules = document.getElementById("rules-dialog").showModal();
  }

  //if user gets the full word correct
  if (hiddenWord2 === word && newGame) {
    closeAll();
    openModal();
  }

  //useeffect to run every time hiddenword2 changes
  useEffect(() => {
    setHiddenWord2(hiddenWord2);
  }, [hiddenWord2]);

  // conditional rendering for if "newgame" is true
  if (newGame) {
    return (
      <div className="App">
        <NewModal />
        <LoseModal />
        <Header />
        <RulesModal />
        <div>
          {/* button that will restart the game by calling handlerestart */}
          <button className="restart" onClick={handleRestart}>
            Restart
          </button>
          {/* button that will call alertrules function */}
          <button className="game-info" onClick={openRules}>
            How to play
          </button>
        </div>
        {/* using the image array to choose the source for which image is displayed */}
        <img src={image[index]} alt="hangman" />
        <div className="letter-space">
          <h1>{hiddenWord2}</h1>
        </div>
        <div className="wrong-guesses">
          <h2>Wrong guesses:</h2>
          <h3>{wrongGuesses.toString()}</h3>
        </div>
        <div className="alphabet">
          <Alphabet handleLetter={handleLetter} />
        </div>
      </div>
    );
  } else if (!newGame) {
    return (
      <div className="App">
        <Header />
        <Words getWord={getWord} />
      </div>
    );
  }
}
export default App;
