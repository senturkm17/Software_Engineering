import React, { Component } from 'react';
import axios from "axios";
import sockett from '../socket';

const TaskContext = React.createContext();
//Provider, Consumer verecek

const reducer = (state,action) =>{
    switch(action.type){
        case "DELETE_USER":
            const newTask = state.tasks.filter(task=> action.payload !== task._id);
            sockett.emit('task', {
                task: newTask
              });
            return{             
                ...state,       //Old state  
                tasks: state.tasks.filter(task=> action.payload !== task._id)
            }
        case "ADD_USER":
            // console.log("Heree");
            sockett.on('chat', ({message}) => {
                // console.log(message)
              })
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}


export class TaskProvider extends Component {
    state = {
        tasks: [],
        dispatch : action =>{
            this.setState(state => reducer(state, action))
        }
      }

    componentDidMount = async () =>{
       const response = await axios.post("https://gameplay-for-scrum.herokuapp.com/generate_task");
       this.setState({
         tasks: response.data
       })
       // console.log(sockett);
       sockett.on("task-backlog",({task})=>{               //birden fazla alabilir dikkat
            // console.log("abovvv");   
            this.state.dispatch({type: task[0], payload: task[1]});
       });
    }



    componentWillUnmount(){
        sockett.off("task-backlog"); 
    }



    render() {
        //// console.log(this.state.tasks);
        return (
            <TaskContext.Provider value={this.state}>
               {this.props.children}
            </TaskContext.Provider>
        );
    }
}

const TaskConsumer = TaskContext.Consumer;
export default TaskConsumer;

