import React from "react";
import'./style.css';

const ListElement = ({taskName, completed, completeTask, deleteTask}) => {
    const handleTask = () =>{
        if(!completed){
            completeTask(taskName);
        }else{
            deleteTask(taskName);
        }
    }

    return (
        <div id="element">
            <div id="checkbox" onClick={handleTask}>{completed && <div id="crusesita"/>}</div>
            <div id="taskName" className={completed ? "tachado" : null}>{taskName}</div>
        </div>
    )
}

export default ListElement;