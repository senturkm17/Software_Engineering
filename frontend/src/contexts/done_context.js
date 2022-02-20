import React, { Component } from 'react';
import sockett from '../socket';

const DoneContext = React.createContext();


const reducer_done = (state,action) =>{
    switch(action.type){
        case "DELETE_USER":
            return{             
                ...state,       //Old state  
                tasks: state.tasks.filter(task=> action.payload !== task._id)
            }
        case "ADD_USER":
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}

export class DoneProvider extends Component {
    state = {
        tasks: [],
        dispatch_done : action =>{
            this.setState(state => reducer_done(state, action))
        }
      }

    componentDidMount(){
        sockett.on("task-done",({task})=>{               //birden fazla alabilir dikkat
                this.state.dispatch_done({type: task[0], payload: task[1]});
                //this.setState({tasks : [...this.state.tasks,task[1]]});
        });
    }

    componentWillUnmount(){
        sockett.off("task-done"); 
    }
    
    render() {
        return (
            <DoneContext.Provider value={this.state}>
               {this.props.children}
            </DoneContext.Provider>
        );
    }
}

const DoneConsumer = DoneContext.Consumer;

export default DoneConsumer;
