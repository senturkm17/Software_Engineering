import { Component } from "react";
import TaskConsumer from "../contexts/task_context";
import ClearIcon from "./icons/clear_icon";
import ComplicatedIcon from "./icons/complicated_icon";
import ComplexIcon from "./icons/complex_icon";
import "./icons/icons.css";
import "../App.css";

class ProductBacklog extends Component {
  render() {
      return(
        <TaskConsumer>
        {

          value => {
            const {tasks} = value;
            const tasks_length = tasks.length;
            if(tasks_length === 0){
              return(
                <div className="product-backlog">
                  <h2>Product Backlog</h2>
                    <div className="product-backlog-board">
                      <p>No Task</p>
                    </div>
                </div>
              )
            }
            return(
              <div className="product-backlog">
              <h2>Product Backlog</h2>
              <div className="product-backlog-board">
                <div>
                {
                  tasks.map(task => {
                      let my_method;
                      if(task.type === "clear"){

                        my_method = <ClearIcon key = {task._id} _id = {task._id}  description = {task.description} cursor = "pointer" come_from="prod_back"/>
                      }
                      else if(task.type === "complicated"){
                        my_method = <ComplicatedIcon key = {task._id} _id = {task._id} description = {task.description} cursor = "pointer" come_from="prod_back"/>
                      }
                      else if(task.type === "complex"){
                        my_method = <ComplexIcon key = {task._id} _id = {task._id} 
                        description = {task.description} description_complicated = {task.description_complicated}
                        description_clear = {task.description_clear} cursor = "pointer" come_from="prod_back"/>
                      }
                      else{
                        my_method = null;
                      }
                  return(
                      <div className="tooltip">{my_method}
                          <span className="tooltiptext">{task.description}</span>
                      </div>            
                  )

                  })
                }
                </div>
                </div>
          </div>
              )
          }
        }
        </TaskConsumer>
      )
  }
}

export default ProductBacklog;




