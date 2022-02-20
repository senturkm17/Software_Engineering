import React, { Component} from 'react';
import sockett from '../socket';

const SprintContext = React.createContext();


const reducer_sprint = (state,action) =>{
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
        case "FILL_HOLE":
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}
export class SprintProvider extends Component {


    state = {
        tasks: [],
        dispatch_sprint : action =>{
            this.setState(state => reducer_sprint(state, action))
        }
    }

    componentDidMount(){
        sockett.on("task-sprint",({task})=>{               //birden fazla alabilir dikkat
                // console.log("deneme");
                this.state.dispatch_sprint({type: task[0], payload: task[1]});
                //this.setState({tasks : [...this.state.tasks,task[1]]});
        });
    }


    componentWillUnmount(){
        sockett.off("task-sprint"); 
    }

    render() {
        return (
            <SprintContext.Provider value={this.state}>
               {this.props.children}
            </SprintContext.Provider>
        );
    }
}

const SprintConsumer = SprintContext.Consumer;

export default SprintConsumer;
