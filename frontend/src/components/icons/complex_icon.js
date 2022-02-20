import React, { Component } from 'react'
import "./icons.css"
import TaskConsumer from "../../contexts/task_context";
import SprintConsumer from "../../contexts/sprint_context";
import ProgressConsumer from '../../contexts/in_progress_context';
import sockett from "../../socket";

class ComplexIcon extends Component {

    //state = {
    //    hole_color_1: "#FFFFFF",
    //    hole_color_2: "#FFFFFF",
    //    hole_color_3: "#FFFFFF",
    //    hole_color_4: "#FFFFFF",
    //    task_clicked:0
    //};

    static defaultProps = {
        width: "80px",
        height: "80px",
        width_hole: "20px",
        height_hole: "20px",
        cursor: "default",
        type : "complex",
        come_from: null,
        fill_hole:0
    }

    onClickEvent = (dispatch, dispatch_sprint, dispatch_progress, e) =>{  //Arrow functions binds the this pointer
        const {_id, type, description, description_complicated, description_clear} = this.props;

        if(this.props.come_from === "prod_back"){
            const newTask = {
                _id: _id,
                type: type,
                description: description,
                description_complicated: description_complicated,
                description_clear: description_clear,
                fill_hole:0,
                tasks_clicked: 0
            }
            sockett.emit('task-sprint', {
                task: ["ADD_USER",newTask]
            })
            sockett.emit('task-backlog',{
                task:["DELETE_USER", _id]
            })
            //dispatch_sprint({type: "ADD_USER", payload:newTask});
            //dispatch({type: "DELETE_USER", payload:_id});
        }
        else if(this.props.come_from === "game_board"){
            const newTask = {
                _id: _id,
                type: type,
                description: description,
                description_complicated: description_complicated,
                description_clear: description_clear,
                fill_hole:0,
                tasks_clicked: 0
            }
            sockett.emit('task-progress', {
                task: ["ADD_USER",newTask]
            })
            sockett.emit('task-sprint',{
                task:["DELETE_USER", _id]
            })
            //dispatch_progress({type: "ADD_USER", payload:newTask});
            //dispatch_sprint({type: "DELETE_USER", payload:_id});
        }
        else if(this.props.come_from === "sprint_board"){
            if(this.props.tasks_clicked === 0){
                sockett.emit('token',{
                    token: [_id]
                })
            }
            else if(this.props.tasks_clicked === 1){
                sockett.emit('token',{
                    token: [_id]
                })
            }
            else if(this.props.tasks_clicked === 2){
                sockett.emit('token',{
                    token: [_id]
                })
            }
            else if(this.props.tasks_clicked === 3){
                sockett.emit('token',{
                    token: [_id]
                })
            }
            else if(this.props.tasks_clicked === 4){
                const newTask_1 = {
                    _id: _id + "3",
                    type: "clear",
                    description: description_clear,
                    fill_hole:0,
                    tasks_clicked: 0
                }
                const newTask_2 = {
                    _id: _id + "4",
                    type: "complicated",
                    description: description_complicated,
                    fill_hole:0,
                    tasks_clicked: 0
                }

                sockett.emit('task-backlog', {
                    task: ["ADD_USER",newTask_1]
                })
                sockett.emit('task-backlog', {
                    task: ["ADD_USER",newTask_2]
                })              
                sockett.emit('task-progress',{
                    task:["DELETE_USER", _id]
                })
                //dispatch({type: "ADD_USER", payload:newTask_1});
                //dispatch({type: "ADD_USER", payload:newTask_2});
                //dispatch({type: "ADD_USER", payload:newTask_3});
    
                //dispatch_progress({type: "DELETE_USER", payload:_id});
            }
        }


    }

    render() {
        const {width,height,width_hole, height_hole, cursor, 
            hole_clr_1, hole_clr_2, hole_clr_3, hole_clr_4} = this.props;
        //const {hole_color_1,hole_color_2,hole_color_3,hole_color_4} = this.state;

        return (

            <TaskConsumer>{(taskContext) => (
                <SprintConsumer>{(sprintContext) => (
                    <ProgressConsumer>{(progressContext) =>{
                        const {dispatch} = taskContext;
                        const {dispatch_sprint} = sprintContext;
                        const {dispatch_progress} = progressContext;
                        return(
                            <div className="icon_3" onClick = {this.onClickEvent.bind(this,dispatch,dispatch_sprint,dispatch_progress)} style={{"width": width, "height":height, "cursor":cursor}}>
                                <div className="hole_complex"  style={{"width":width_hole, "height":height_hole, "background":hole_clr_1}}></div>
                                <div className="hole_complex"  style={{"width":width_hole, "height":height_hole, "background":hole_clr_2}}></div>
                                <div className="hole_complex"  style={{"width":width_hole, "height":height_hole, "background":hole_clr_3}}></div>
                                <div className="hole_complex"  style={{"width":width_hole, "height":height_hole, "background":hole_clr_4}}></div>
                            </div>
                        )
                    }}
                    </ProgressConsumer>

            )}</SprintConsumer>
                )
            }</TaskConsumer>
        )
    }
}

export default ComplexIcon


