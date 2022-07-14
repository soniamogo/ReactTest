import React from "react";
import'./style.css';

const InputTask = ({value, changeValue, addToList}) => {
    const handleChange = (event) => {
        changeValue(event.target.value);
    }
    const addElement = () => {
        console.log('Hola')
        addToList();
    }
    return (
        <div id="inputContainer">
            <input type="text" onChange={handleChange} value={value}></input>
            <button id="add" onClick={addElement}>Añadir</button>
        </div>
    )
}

export default InputTask;