import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
    render() {
        const {todos, onDeleteToDo, query} = this.props;
        return (
            <div>
                <h3>To Do List</h3>
                <ul>
                    {
                        todos.length > 0? 
                            (todos
                                // ToDoItem is an Object ==> Object.PropertyKey
                                .filter((toDoItem) => {
                                    return toDoItem.title.toLowerCase().includes(query.toLowerCase());
                                })
                                .map((toDoItem) => {
                                    return <ToDoItem toDoItem={toDoItem} key={toDoItem.id}
                                                        onDeleteToDo={onDeleteToDo} />;
                                }) 
                    ) : (
                            <p>Add your tasks!! </p>
                    )}

                </ul>    
            </div>
        );
    }
}

export default ToDoList;