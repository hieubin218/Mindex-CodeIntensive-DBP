import React, { Component } from 'react';
import {v4 as uuidv4} from "uuid";

class AddNewToDo extends Component {
    state={
        toDoTitle: "",

    }


    // Add new TodoTitle to the method props onAddToDo at parents Component
    btnAddToDo = () => {
        const newToDo = {
            title: this.state.toDoTitle,
            isCompleted: false,
            id: uuidv4(),
        }

        // Clear the input after typed and Added
        this.setState({
            toDoTitle: "",
        })
            
        this.props.onAddToDo(newToDo);
    };


    onToDoChange = (event) => {
        this.setState({
        toDoTitle: event.target.value,
        });
    }


    render() {
        return (
            <div>
                <h3 className="text-center">ADD ITEM HERE</h3>
                <div className="fg">
                    <input type="text" 
                        placeholder="New Item Here"
                        value={this.state.toDoTitle}
                        onChange={this.onToDoChange}>

                    </input>
                    <button onClick={this.btnAddToDo} >Add </button>
                </div>
            </div>
        );
    }
}

export default AddNewToDo;