import React from "react";
import Task from "./Task"


function TaskList(props) {

  console.log(props.gooblygoop)
  return (
    <div className="tasks">
      
      {props.gooblygoop.map(tasks => <Task text={tasks.text} category={tasks.category} ></Task>)}
    </div>
    
  );  
}

export default TaskList;


