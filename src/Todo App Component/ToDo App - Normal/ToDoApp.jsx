import React, { Component } from 'react';
import "./ToDoApp.css";

import SearchToDoItem from "./SearchToDoItem";
import ToDoList from "./ToDoList";
import AddNewToDo from "./AddNewToDo";

class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state={
            todos: [
                {id: 1, title: "Check Trade Coin", isCompleted: true},
                {id: 2, title: "Learn Redux vs Vuex", isCompleted: false},
                {id: 3, title: "Learn FBM Platform", isCompleted: true},
                {id: 4, title: "Check DataBase course assignments", isCompleted: false},
                {id: 5, title: "Read Documents of Internship", isCompleted: false},
            ],

            query: "",
        }
    }

    onAddToDo = (newToDo) => {
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    };

    onDeleteToDo = id => {
        // Modify incompleted => false
        const updateTodos = this.state.todos.map((todoitem) => {
            return todoitem.id === id 
            ? {
                ...todoitem,
                isCompleted: true,
            }
            : todoitem;
        });

        // setState => new todos 
        this.setState({
            todos: updateTodos,
        });
    };


    onQueryTodo = (query) => {
        this.setState({
            query,
        });
    };
    

     
    render() {
        const {todos, query} = this.state;

        return (
            <div className="container">
                <h1 className="text-center mb-4">To Do App: Manage Your Item</h1>
                <SearchToDoItem onQueryTodo={this.onQueryTodo} />
                <ToDoList todos={todos}
                          onDeleteToDo={this.onDeleteToDo}
                          query={query}
                />
                <AddNewToDo onAddToDo={this.onAddToDo}/>     
            </div>
        );
    }
}

export default ToDoApp;