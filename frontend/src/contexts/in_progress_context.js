import React, { Component } from 'react';
import sockett from '../socket';

export const ProgressContext = React.createContext();


const reducer_progress = (state,action) =>{
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
        case "FILL_TOKEN":
            var data = state.tasks.filter(task => action.payload[0] === task._id);
            var dataIndex = state.tasks.findIndex((task => action.payload[0] === task._id));
            data[0].fill_hole += 1;
            data[0].tasks_clicked = data[0].fill_hole;
            state.tasks[dataIndex] = data[0];

            return{
                state
            }
        default:
            return state
    }
}

export class ProgressProvider extends Component {
    state = {
        tasks: [],
        dispatch_progress : action =>{
            this.setState(state => reducer_progress(state, action))
        }
      }

    componentDidMount(){
        sockett.on("task-progress",({task})=>{               //birden fazla alabilir dikkat
                this.state.dispatch_progress({type: task[0], payload: task[1]});
                //this.setState({tasks : [...this.state.tasks,task[1]]});
        });
        sockett.off("token").on("token",({token})=>{
                this.state.dispatch_progress({type:"FILL_TOKEN", payload: token});
        })
    }

    componentWillUnmount(){
        sockett.off("task-progress"); 
    }

    render() {
        return (
            <ProgressContext.Provider value={this.state}>
               {this.props.children}
            </ProgressContext.Provider>
        );
    }
}

const ProgressConsumer = ProgressContext.Consumer;

export default ProgressConsumer;
