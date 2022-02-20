import React, { Component } from 'react';
import "../index.css";
import PlayersConsumer from '../contexts/players_context';
import Tokens from './icons/tokens';
import "../App.css";

class Player extends Component {
    static defaultProps = {
        player_name:"Default",
        num_of_tokens : 6
    }
    render() {
        const {num_of_tokens} = this.props;
        const row_numb =Math.floor(num_of_tokens/3);
        const remainder = num_of_tokens %3;
        const tokens = [];
        if(row_numb === 0){
            switch(remainder) {
                case 1:
                    tokens.push(<div className="row"><div className="column"><Tokens/></div></div>)
                    break;
                case 2:
                    tokens.push(<div className="row"><div className="column"><Tokens/></div>
                                <div className="column"><Tokens/></div></div>)
                  break;
                default:
                    tokens.push(<div className="row"></div>)
              }

        }
        else{
            for(let i=0;i<row_numb;i++){
                tokens.push(<div className="row"><div className="column"><Tokens/></div>
                <div className="column"><Tokens/></div><div className="column"><Tokens/></div></div>)
            }
            switch(remainder) {
                case 1:
                    tokens.push(<div className="row"><div className="column"><Tokens/></div></div>)
                    break;
                case 2:
                    tokens.push(<div className="row"><div className="column"><Tokens/></div>
                    <div className="column"><Tokens/></div></div>)
                  break;
                default:
                    tokens.push(<div className="row"></div>)
              }
        }
        return (<PlayersConsumer>
            {
                value =>{
                    //const{dispatch} = value;
                    return(
                        <div>
                            <div>{tokens}</div>
                        </div>

                    )
                }
            }
            </PlayersConsumer>

        );
    }
}

export default Player;
