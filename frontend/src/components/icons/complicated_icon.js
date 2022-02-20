import React, { Component } from 'react';
import "./icons.css"
import TaskConsumer from "../../contexts/task_context";
import SprintConsumer from "../../contexts/sprint_context";
import ProgressConsumer from '../../contexts/in_progress_context';
import DoneConsumer from '../../contexts/done_context';
import sockett from "../../socket";

class ComplicatedIcon extends Component {

    static defaultProps = {
        width: "80px",
        height: "80px",
        width_hole: "20px",
        height_hole: "20px",
        cursor: "default",
        type : "complicated",
        come_from: null,
        fill_hole:0
    }

    onClickEvent = (dispatch,dispatch_sprint,dispatch_progress, dispatch_done, e) =>{  //Arrow functions binds the this pointer
        const {_id, type, description} = this.props;
        if(this.props.come_from === "prod_back"){
            const newTask = {
                _id: _id,
                type: type,
                description: description,
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
                const newTask = {
                    _id: _id,
                    type: type,
                    description: description,
                    fill_hole:this.props.fill_hole,
                    tasks_clicked: this.props.tasks_clicked
                }
                sockett.emit('task-done', {
                    task: ["ADD_USER",newTask]
                })
                sockett.emit('task-progress',{
                    task:["DELETE_USER", _id]
                })
            //dispatch_done({type: "ADD_USER", payload:newTask});
            //dispatch_progress({type: "DELETE_USER", payload:_id});
        }
        else{
            // console.log("Heyoooo");
        }
        }

    }

    render() {
        const {width,height,width_hole, height_hole, cursor, hole_clr_1, hole_clr_2} = this.props;
        //const {hole_color_1,hole_color_2} = this.state;
        return (
            <TaskConsumer>{(taskContext) => (
                <SprintConsumer>{(sprintContext) => (
                    <ProgressConsumer>{(progressContext) =>(
                        <DoneConsumer>{(doneContext) => {

                                const {dispatch} = taskContext;
                                const {dispatch_sprint} = sprintContext;
                                const {dispatch_progress} = progressContext;
                                const {dispatch_done} = doneContext
                                return(
                                    <div>
                                    <div className = "icon_2" onClick = {this.onClickEvent.bind(this,dispatch,dispatch_sprint,dispatch_progress,dispatch_done)} style={{"width": width, "height":height, "cursor": cursor}}>
                                        <div className="hole_complicated" style={{"width":width_hole, "height":height_hole, "background": hole_clr_1}}></div>
                                        <div className="hole_complicated" style={{"width":width_hole, "height":height_hole, "background": hole_clr_2}}></div>
                                    </div>
                                    </div>
                                )
                        }}</DoneConsumer>
                    )}</ProgressConsumer>
                )}</SprintConsumer>
            )}</TaskConsumer>
        );
    }
}

export default ComplicatedIcon;

