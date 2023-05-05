import React from "react";

function NewModal() {
  return (
    <dialog id="dialog">
      <form>
        <h3>congratulations you won!</h3>
        <div>
          <button value="close" formmethod="dialog">
            Close
          </button>
          <button id="restart" value="default" >
            Play again
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default NewModal;
