import { useState } from "react";

function EnterName({auth}) {

  const [details, setDetails] = useState({ name: "", id: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    auth(details)
  };

  return (
    <div className="login">
      <h1 className="mb-2">Gameplay for Scrum</h1>
      <p className="mb-3 w-25">
        Enter your name so that your friends know who is playing.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="button mr-2"
          placeholder="Enter your name"
          onChange={e => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <button className="button green">Join the Game</button>
      </form>
    </div>
  );
}

export default EnterName;
