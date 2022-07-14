import React, { Component } from "react"
import'./style.css'
import InputTask from "../Input";
import List from "../List"

export default class ToDoList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            complete:[],
            incomplete: []
        }
    }

    changeValue = (newValue) => {
        this.setState({value:newValue});
    }

    addToList = () => {
        var newIncomplete = [...this.state.incomplete];
        newIncomplete.push(this.state.value);
        this.setState({value:'',incomplete:newIncomplete});
    }

    completeTask = (task) => {
        if(this.state.incomplete.includes(task)){
        var newIncomplete = [...this.state.incomplete];
        var posTask = newIncomplete.indexOf(task);
        newIncomplete.splice(posTask, 1);
        var newComplete = [... this.state.complete];
        newComplete.push(task);
        this.setState({complete:newComplete, incomplete:newIncomplete});
        }
    }

    deleteTask = (task) => {
        if(this.state.complete.includes(task)) {
            var newComplete = [...this.state.complete];
            var posTask = newComplete.indexOf(task);
            newComplete.splice(posTask, 1)
            this.setState({complete:newComplete})
        }
    }

    render(){
        console.log(this.state)
        return(
        <div className="lista">
            <h1>La lista de {this.props.name}</h1>
            <div className='separador'/>
            <InputTask value={this.state.value} changeValue={this.changeValue} addToList={this.addToList} />
            <div id="listas">
                <List tittle="Incompleto" elements={this.state.incomplete} completeTask={this.completeTask}/>
                <div id="separadorVertical" />
                <List tittle="Completo" elements={this.state.complete} deleteTask={this.deleteTask} completed={true}/>
            </div>
        </div>
        )
    }
}