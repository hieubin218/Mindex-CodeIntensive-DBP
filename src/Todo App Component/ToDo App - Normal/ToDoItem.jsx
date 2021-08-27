import React, { Component } from 'react';

class ToDoItem extends Component {
    

    render() {
        const{id,title, isCompleted} = this.props.toDoItem;
        const {onDeleteToDo} = this.props;
        
        return (
            <div>
                <li className={isCompleted? "done": ""}>
                    {title}
                    {/** !isCompleted = False => render button for component */}
                    {!isCompleted && <button onClick={() => onDeleteToDo(id)}>Delete</button>}
                </li>
            </div>
        );
    }
}

export default ToDoItem;