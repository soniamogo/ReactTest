import React, { Component } from "react"
import'./style.css'
import InputTask from "../Input";
import List from "../List"

export default class ToDoList extends Component{
    render(){
        let incomplete = ["Comprar pan", "Matar a los chinos"];
        let complete = ["Limpiar", "Hacer la comida"];
        return(
        <div className="lista">
            <h1>La lista de {this.props.name}</h1>
            <div className='separador'/>
            <InputTask/>
            <div id="listas">
                <List tittle="Incompleto" elements={incomplete}/>
                <div id="separadorVertical" />
                <List tittle="Completo" elements={complete} completed={true}/>
            </div>
        </div>
        )
    }
}