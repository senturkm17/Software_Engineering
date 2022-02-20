import React, { Component } from "react";
import ClearIcon from "./icons/clear_icon";
import ComplicatedIcon from "./icons/complicated_icon";
import ComplexIcon from "./icons/complex_icon";
import SprintConsumer from "../contexts/sprint_context";
import ProgressConsumer from "../contexts/in_progress_context";
import DoneConsumer from "../contexts/done_context";
import Example from "./timer";
import "./icons/icons.css";
import "../App.css";

class GameBoard extends Component {
  state = {};
  render() {
    return (
      <div className="board scrum">
        <div className="sprint-info">
          <div  className="flex-col-center">
            Iteration Number
            <span className="h2">0</span>
          </div>
          <button className="emergency-button">Emergency</button>
          <div  className="flex-col-center">
            Remaining Time
            <Example/>
          </div>
        </div>
        <div className="sprint-boards">
          <div className="board-content">
          <h3>Sprint Backlog</h3>
            <SprintConsumer>
              {
                value => {
                  const {tasks} = value;
                  const length_task = tasks.length;
                  let my_method;

                  if(length_task === 0){
                    return(
                      <div className="board">
                        <p>No Task</p>
                      </div>
                    )
                  }
                  return(
                    <div className="board">
                      {
                        tasks.map(task=>{
                          if(task.type === "clear"){
                            my_method = <ClearIcon key = {task._id} _id = {task._id} description = {task.description} fill_hole = {task.fill_hole} cursor = "pointer" come_from="game_board"/>
                          }
                          else if(task.type === "complicated"){
                            my_method = <ComplicatedIcon key = {task._id} _id = {task._id} description = {task.description} fill_hole = {task.fill_hole} cursor = "pointer" come_from="game_board"/>
                          }
                          else if (task.type === "complex"){
                            my_method = <ComplexIcon key = {task._id} _id = {task._id}
                            description = {task.description} description_complicated = {task.description_complicated}
                            description_clear = {task.description_clear} fill_hole = {task.fill_hole}
                            cursor = "pointer" come_from="game_board"/>
                          }
                          else{
                            my_method = <p>Empty</p>
                          }
                      return(
                        <div className="tooltip">{my_method}
                          <span className="tooltiptext">{task.description}</span>
                        </div>
                      )
                        })
                      }

                    </div>
                  )
                }
              }
            </SprintConsumer>
          </div>


          <div className="board-content">
            <h3>In Progress</h3>
            <ProgressConsumer>
              {
                value => {
                  const {tasks} = value;
                  const length_task = tasks.length;
                  let my_method;

                  if(length_task === 0){
                    return(
                      <div className="board">
                        <p>No Task</p>
                      </div>
                    )
                  }
                  return(
                    <div className="board">
                      {
                        tasks.map(task=>{
                          if(task.type === "clear"){
                            if(task.fill_hole !== 0){
                              my_method = <ClearIcon key = {task._id} _id = {task._id}
                              description = {task.description} fill_hole= {task.fill_hole}
                              hole_clr = "#C694D7" tasks_clicked = {task.tasks_clicked}
                              cursor = "pointer" come_from="sprint_board"/>
                            }
                            else{
                              my_method = <ClearIcon key = {task._id} _id = {task._id}
                              description = {task.description} fill_hole= {0}
                              hole_clr = "#FFFFFF" tasks_clicked = {0}
                              cursor = "pointer" come_from="sprint_board"/>
                            }
                          }
                          else if(task.type === "complicated"){
                            if(task.fill_hole ===1){
                              my_method = <ComplicatedIcon key = {task._id} _id = {task._id}
                              description = {task.description} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#4F4F4F" hole_clr_2 = "#FFFFFF"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else if(task.fill_hole ===2){
                              my_method = <ComplicatedIcon key = {task._id} _id = {task._id}
                              description = {task.description} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#4F4F4F" hole_clr_2 = "#4F4F4F"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else{
                              my_method = <ComplicatedIcon key = {task._id} _id = {task._id}
                              description = {task.description} fill_hole = {0}
                              hole_clr_1 = "#FFFFFF" hole_clr_2 = "#FFFFFF"
                              tasks_clicked = {0} cursor = "pointer" come_from="sprint_board"/>
                            }
                          }
                          else if (task.type === "complex"){
                            if(task.fill_hole ===1){
                              my_method = <ComplexIcon key = {task._id} _id = {task._id}
                              description = {task.description} description_complicated = {task.description_complicated}
                              description_clear = {task.description_clear} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#6FCF97" hole_clr_2 = "#FFFFFF"
                              hole_clr_3 = "#FFFFFF" hole_clr_4 = "#FFFFFF"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else if(task.fill_hole ===2){
                              my_method = <ComplexIcon key = {task._id} _id = {task._id}
                              description = {task.description} description_complicated = {task.description_complicated}
                              description_clear = {task.description_clear} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#6FCF97" hole_clr_2 = "#6FCF97"
                              hole_clr_3 = "#FFFFFF" hole_clr_4 = "#FFFFFF"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else if(task.fill_hole ===3){
                              my_method = <ComplexIcon key = {task._id} _id = {task._id}
                              description = {task.description} description_complicated = {task.description_complicated}
                              description_clear = {task.description_clear} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#6FCF97" hole_clr_2 = "#6FCF97"
                              hole_clr_3 = "#6FCF97" hole_clr_4 = "#FFFFFF"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else if(task.fill_hole ===4){
                              my_method = <ComplexIcon key = {task._id} _id = {task._id}
                              description = {task.description} description_complicated = {task.description_complicated}
                              description_clear = {task.description_clear} fill_hole = {task.fill_hole}
                              hole_clr_1 = "#6FCF97" hole_clr_2 = "#6FCF97"
                              hole_clr_3 = "#6FCF97" hole_clr_4 = "#6FCF97"
                              tasks_clicked = {task.tasks_clicked} cursor = "pointer" come_from="sprint_board"/>
                            }
                            else{
                              my_method = <ComplexIcon key = {task._id} _id = {task._id}
                              description = {task.description} description_complicated = {task.description_complicated}
                              description_clear = {task.description_clear} fill_hole = {0}
                              hole_clr_1 = "#FFFFFF" hole_clr_2 = "#FFFFFF"
                              hole_clr_3 = "#FFFFFF" hole_clr_4 = "#FFFFFF"
                              tasks_clicked = {0} cursor = "pointer" come_from="sprint_board"/>
                            }
                          }
                          else{
                            my_method = <p>Empty</p>
                          }
                      return(
                        <div className="tooltip">{my_method}
                          <span className="tooltiptext">{task.description}</span>
                        </div>
                      )
                        })
                      }

                    </div>
                  )
                }
              }
            </ProgressConsumer>
          </div>



          <div className="board-content">
            <h3>Done</h3>
            <DoneConsumer>
              {
                value => {
                  const {tasks} = value;
                  const length_task = tasks.length;
                  let my_method;

                  if(length_task === 0){
                    return(
                      <div className="board">
                        <p>No Task</p>
                      </div>
                    )
                  }
                  return(
                    <div className="board">
                      {
                        tasks.map(task=>{

                          if(task.type === "clear"){
                            my_method = my_method = <ClearIcon key = {task._id} _id = {task._id}
                            description = {task.description} fill_hole= {task.fill_hole}
                            hole_clr = "#C694D7" tasks_clicked = {task.tasks_clicked}
                            come_from="progress_board"/>
                          }
                          else if(task.type === "complicated"){
                            my_method = <ComplicatedIcon key = {task._id} _id = {task._id}
                            description = {task.description} fill_hole = {task.fill_hole}
                            hole_clr_1 = "#4F4F4F" hole_clr_2 = "#4F4F4F"
                            tasks_clicked = {task.tasks_clicked} come_from="progress_board"/>
                          }
                          else if (task.type === "complex"){
                            my_method = <ComplexIcon key = {task._id} _id = {task._id}
                            description = {task.description} fill_hole = {task.fill_hole}
                            hole_clr_1 = "#6FCF97" hole_clr_2 = "#6FCF97"
                            hole_clr_3 = "#6FCF97" hole_clr_4 = "#6FCF97"
                            tasks_clicked = {task.tasks_clicked} come_from="progress_board"/>
                          }
                          else{
                            my_method = <p>Empty</p>
                          }
                      return(
                        <div className="tooltip">{my_method}
                          <span className="tooltiptext">{task.description}</span>
                        </div>
                        )
                        })
                      }

                    </div>
                  )
                }
              }
            </DoneConsumer>


          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
