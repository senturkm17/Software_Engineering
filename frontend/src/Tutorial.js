import React, { Component } from 'react'
import ClearIcon from "./components/icons/clear_icon";
import ComplicatedIcon from "./components/icons/complicated_icon";
import ComplexIcon from "./components/icons/complex_icon";
import "./App.css";
import backlog from "./imgs/backlog.png";
import task_description from "./imgs/task_description.png";
import players from "./imgs/players.png";
import gameboard from "./imgs/gameboard_sections.png";
import retro_notes from "./imgs/retro_notes.png";

export default class Tutorial extends Component {
  state={
      pageNumber:1
    };

  changePageNext = (e)=>{
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
  }
  changePageBack = (e)=>{
    if(this.state.pageNumber !== 1){
      this.setState({
        pageNumber: this.state.pageNumber -1
      });
    }
  }

    render() {
        //let my_class;
        let method;
        //my_class = "total-back";
        if(this.state.pageNumber === 1 ){
            method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              <pre className="tutorial-text">In this game, you will learn the basics of Scrum and Cynefin <br/>
                                            Framework. This game provide to understand these terms and <br/>
                                            facilitate to adapt the Agile world. If you are ready, click the <br/>
                                            <b>Next</b> button to continue this tutorial..</pre>
              <span className="next-button" style={{left: "45%"}} onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 2 ){
          method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              
              <pre className="tutorial-text"><b>Agile</b> is an iterative approach to project management and<br/> 
                                            software development that helps teams deliver value to their <br/>
                                            customers faster and with fewer headaches. Instead of betting <br/>
                                            everything on a "big bang" launch, an agile team delivers work in <br/>
                                            small, but consumable, increments.</pre>            
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 3 ){
          method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              
              <pre className="tutorial-text"><b>Scrum</b> is a framework that helps teams work together. Much <br/>
                                            like a rugby team (where it gets its name) training for the big <br/>
                                            game, scrum encourages teams to learn through experiences, <br/>
                                            self-organize while, working on a problem, and reflect on their <br/>
                                            wins and losses to continuously improve.</pre>            
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 4 ){
          method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              
              <header><h4 className="tutorial-header">Basic Elements of the Scrum Framework</h4></header>
              <pre className="tutorial-text">A <b>Product Backlog</b> is a prioritized list of work for the <br/>
                                            development team that is derived from the roadmap and its <br/> 
                                            requirements. The most important items are shown at the top of <br/> 
                                            the product backlog so the team knows what to deliver first.</pre>            
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 5 ){
          method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              <pre className="tutorial-text">The <b>Sprint Backlog</b>  is composed of the Sprint Goal (why),<br/> 
                                            the set of Product Backlog items selected for the Sprint (what), <br/>
                                            as well as an actionable plan for delivering the Increment (how).<br/> 
                                            The Sprint Backlog is a plan by and for the Developers. It is a <br/>
                                            highly visible, real-time picture of the work that the Developers <br/>
                                            plan to accomplish during the Sprint in order to achieve the  <br/>
                                            Sprint Goal. Consequently, the Sprint Backlog is updated <br/>
                                            throughout the Sprint as more is learned. It should have enough <br/>
                                            detail that they can inspect  their progress in the Daily Scrum.</pre>            
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 6 ){
          method = <section>
              <header><h2 className="tutorial-header">Welcome to the Gameplay for Scrum</h2></header>
              <pre className="tutorial-text">A <b>Retrospective</b> is a meeting held after a product ships <br/> 
                                            to discuss what happened during the product development and <br/>
                                            release process, with the goal of improving things in the future<br/> 
                                            based on those learnings and conversations. By the end of the <br/>
                                            Sprint Retrospective, the Scrum Team should have identified <br/>
                                            improvements  that it will implement in the next Sprint. <br/>
                                            Implementing these  improvements in the next Sprint is the <br/>
                                            adaptation to the inspection  of the Scrum Team itself.</pre>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 7 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <pre className="tutorial-text">This game can be played with multiple users as a team. Tasks<br/>
                                            are created in accordance with the number of players. These tasks <br/>
                                            are generated to the <b>Product Backlog</b> area. Before talking <br/>
                                            about the functionalities, let's we talked the types of tasks.</pre>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 8 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className="row-tutorial">
                <section className="col-tutorial"><ClearIcon width = "60px" height = "60px" width_hole="30px" height_hole="30px"/></section>
                <section className="col-tutorial"><pre className="tutorial-text" style={{textAlign: "initial"}}>It is a <b>Clear Task</b>.It is sufficient <br/>
                                                  that one player to work on it.</pre></section>
              </section>
              <section className="row-tutorial">
                <section className="col-tutorial"><ComplicatedIcon width = "60px" height = "60px" width_hole="15px" height_hole="15px"/></section>
                <section className="col-tutorial"><pre className="tutorial-text">It is a <b>Complicated Task</b>. Two player must <br/> 
                work on this task.</pre></section>
              </section>
              <section className="row-tutorial">
                <section className="col-tutorial"><ComplexIcon width = "60px" height = "60px" width_hole="15px" height_hole="15px"/></section>
                <section className="col-tutorial"><pre className="tutorial-text">It is a <b>Complex Task</b>. Four player must <br/> 
                work in this task.</pre></section>
              </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                             
              </section>
        }
        else if(this.state.pageNumber === 9 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className = "row-img">
              <section className= "col-tutorial">
                <img className = "img-tutorial" src={backlog} alt="Backlog"/>
              </section>
                <section className= "col-tutorial">
                  <pre className='tutorial-img'>The game generate the tasks <br/>
                                              into the Product Backlog. Players<br/>
                                              can select any tasks for working<br/>
                                              on them.</pre>
                </section>
              </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 10 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className = "row-img" style={{marginTop : "15%"}}>
              <section className= "col-tutorial">
                <img className = "img-tutorial" style= {{width:"220px",height:"100px"}} src={task_description}  alt="Task Description"/>
              </section>
                <section className= "col-tutorial">
                  <pre className='tutorial-img'>If a player want to see the <br/>
                                                task descriptions, hovering<br/>
                                                on the task is enough to see<br/>
                                                the description.</pre>
                </section>
              </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 11 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className = "row-img">
                <img className = "img-tutorial" style= {{width:"400px",height:"150px"}} src={players}  alt="Players"/>
              </section>
                <section className= "row-img">
                  <pre className='tutorial-img'>Players can see the other<br/>
                                              team members at the bottom <br/>
                                              of the game window. Blue circles<br/>
                                              show the amount of tokens for <br/>
                                              each player to spend in tasks.</pre>
                </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 12 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className = "row-img">
                <img className = "img-tutorial" style= {{width:"400px",height:"150px"}} src={gameboard}  alt="Gameboard"/>
              </section>
                <section className= "row-img">
                  <pre className='tutorial-img'>Team members must put tasks to the Sprint sections respectively.<br/>
                                                For putting tasks on these sections, <b>clicking</b> on the requested<br/>
                                                task is enough. In the <b>In Progress</b> section, team members <br/> 
                                                must select some task by spending his/her tokens. Sprint Iteration<br/>
                                                number and the time is shown at top of the gameboard.<br/>
                                                </pre>
                </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 13 ){
          method = <section>
              <header><h2 className="tutorial-header">How to Play Gameplay for Scrum ?</h2></header>
              <section className = "row-img">
                <section className = "col-tutorial">
                <img className = "img-tutorial" style= {{width:"180px",height:"220px"}} src={retro_notes}  alt="Retro Notes"/>
                </section>
                <section className="col-tutorial">
                <pre className='tutorial-img'>If any team member wants to talk<br/>
                                              with the other players, they can <br/>
                                              use the Retro Notes section by writing<br/>
                                              anything about the sprint process.</pre>
                </section>
              </section>
              <span className="next-button" style={{left: "40%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              <span className="next-button" onClick={this.changePageNext.bind(this)}>Next</span>                              
              </section>
        }
        else if(this.state.pageNumber === 14 ){
          method = <section>
              <header><h2 className="tutorial-header">End of the Gameplay for Scrum Tutorial</h2></header>
              <pre className="tutorial-text">The tutorial ends here. If you have any questions about the<br/>
                                            game again, you can go back to the tutorial pages or become <br/>
                                            experienced while playing the game by clicking the <b>Close</b><br/>
                                            button at the top right of the page. Good luck.</pre>
              <span className="next-button" style={{left: "45%"}} onClick={this.changePageBack.bind(this)}>Back</span>  
              </section>
        }
        let dict = method;
        return (
            <div>
                {dict}
            </div>
        )
    }
}
