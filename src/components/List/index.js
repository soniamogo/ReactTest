import React from "react";
import'./style.css';
import ListElement from "../ListElement";

const List = ({tittle, elements, completed}) => {
    return (
        <div>
            <h3>{tittle}</h3>
            {elements.map(element =>{
                return <ListElement taskName={element} completed={completed}/>  
            })}
          
        </div>
    )
}

export default List;