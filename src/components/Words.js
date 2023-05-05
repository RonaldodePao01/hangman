import React, { useState } from "react";

function Words({ getWord }) {
  let [stateWord, setStateWord] = useState();
  // array of words that user can guess from
  const wordsArr = [
    "hello",
    "white",
    "today",
    "sincere",
    "boring",
    "sudden",
    "crowd",
    "screen",
    "bucket",
    "update",
  ];

  // function that will choose a word from the array
  function handleStart() {
    const guessWord =
      wordsArr[Math.floor(Math.random() * wordsArr.length)].toLowerCase();
    setStateWord(guessWord);
    getWord(guessWord);
  }

  return (
    <div>
      {/* button that will call handlestart onlclick */}
      <button className="restart" onClick={handleStart}>
        Start game
      </button>
      <h3 className="hidden-word"></h3>
    </div>
  );
}

export { Words };
