import "./App.css";
import ProductBacklog from "./components/ProductBacklog";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard";
import SprintInfo from "./components/SprintInfo";
import Players from "./components/Players";
import { useState } from "react";
import Login from "./components/Login";
import sockett from "./socket";
import Tutorial from "./Tutorial";

export default function App() {

  const [user, setUser] = useState({ name: "", id: "" });
  const [tutorial, setTutorial] = useState({ windowClosed:false });

  const auth = (details) => {
    setUser({
      name: details.name,
      id: "",
    });

    sockett.emit("user", {
      player_id: sockett.id,
      player_name: details.name,
      num_of_tokens: 6,
    })
  };

  let our_cls;
  if(tutorial.windowClosed === false){
    our_cls = "total-back";
  }
  else{
    our_cls = "total-none";
  }

  const onClickEvent = (e)=>{
    setTutorial({
      windowClosed: true
    });
  }

  return (
    <div>
      {user.name === "" ? (
        <Login auth={auth} />
      ) : (
        <div>
          {!tutorial.windowClosed ?
              <section className="layer-tutorial">
                    <span className="close-window" onClick={onClickEvent.bind(this)}>Close</span>
                    <Tutorial/>
              </section>
              : null
          }
        <section className={our_cls}>
          <Header />
          <section className="product-main">
            <ProductBacklog />
            <GameBoard />
            <SprintInfo />
          </section>
          <section className="player-section">
            <Players />
          </section>
          </section>
        </div>
      )}
    </div>
  );
}
