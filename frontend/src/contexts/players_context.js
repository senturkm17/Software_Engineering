import React, { Component } from 'react';
import sockett from '../socket';

const PlayersContext = React.createContext();
export class PlayersProvider extends Component {
    state = {
        players: [],
      }

    componentDidMount () {
      sockett.on('user', (player)=> {
        this.setState({...this.state, players:[...this.state.players, player]} )
      })
    }

    componentWillUnmount(){
      sockett.off("user");
  }

    render() {
        return (
            <PlayersContext.Provider value={this.state}>
               {this.props.children}
            </PlayersContext.Provider>
        );
    }
}

const PlayersConsumer = PlayersContext.Consumer;
export default PlayersConsumer;

