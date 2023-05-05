import React from "react";

function RulesModal() {
  return (
    <dialog id="rules-dialog">
      <form>
        <h3>The rules are simple:</h3>
        <p>Choose a letter and try to find the hidden word.</p>
        <p>You get 6 chances to guess correctly until the game ends</p>
        <p>Good luck and have fun!</p>
        <div>
          <button value="close" formmethod="dialog">
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default RulesModal;
