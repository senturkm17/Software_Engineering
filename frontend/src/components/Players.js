import React, { Component } from "react";
//import Tokens from "./icons/tokens";
import "../index.css";
import "../App.css";
import Player from "./Player";
import PlayersConsumer from "../contexts/players_context";
import "../App.css";

class Players extends Component {
  state = {};
  render() {
    return (
      <PlayersConsumer>
        {
          value =>{
            const{players} = value;

            return(
              <div className = "players">
                {
                  players.map(player_data => {
                    return(
                      <div>
                        <p>{player_data.player_name}</p>
                        <Player
                          key = {player_data.player_id}
                          id = {player_data.player_id}
                          player_name = {player_data.player_name}
                          num_of_tokens = {player_data.num_of_tokens}
                        />
                      </div>

                    )
                  })
                }
              </div>
            )
          }
        }
      </PlayersConsumer>
    );
  }
}

export default Players;
