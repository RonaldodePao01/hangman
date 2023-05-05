import React from "react";

function Alphabet({ handleLetter }) {
  function handleGuess(letter, e) {
    e.target.disabled = true;
    handleLetter(letter.toLowerCase());
  }
  // array of alphabet
  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // mapping through the array to display the keys that user uses to enter their guesses
  return alphabetArr.map((letter, index) => (
    <button
      className="alphabet-btn"
      onClick={(e) => handleGuess(letter, e)}
      key={index}
      disabled={false}
    >
      {letter}
    </button>
  ));
}

export default Alphabet;
