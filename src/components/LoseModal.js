import React from "react";

function LoseModal() {
  return (
    <dialog id="lose-dialog">
      <form>
        <h3>You lost! Try again</h3>
        <div>
          <button value="close" formMethod="dialog">
            Close
          </button>
          <button id="restart" value="default">
            Play again
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default LoseModal;
