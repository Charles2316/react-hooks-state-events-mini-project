import React from "react";


function Task(props) { 
  function removeTask () {
   
  }
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
    
      <button onClick={removeTask} className="delete">X</button>
    </div>
  );
}

export default Task;
