import { useState } from "react";
import EnterName from "./EnterName";

export default function Login({auth}) {
  const [room, setRoom] = useState({ started: false });

  const handleClick = () => {
    setRoom({ started: true });
  };

  return (
    <div >
      {room.started ? (
        <EnterName auth={auth}/>
      ) : (
        <div className="login">
          <h1 className="mb-2">Gameplay for Scrum</h1>
          <p className="mb-3 w-25">
            Welcome to the Scrum Game, in this game we will create the tasks
            categorized like the Cynefin Framework. These tasks are: clear,
            complicated, complex, chaotic.
          </p>
          <button onClick={handleClick} className="bg-green white mb-1">Start the Game</button>
          <button onClick={handleClick} className="button">Join a Game</button>
        </div>
      )}
    </div>
  );
}
