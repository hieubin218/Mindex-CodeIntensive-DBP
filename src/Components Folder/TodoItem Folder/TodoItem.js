import React, {Component} from "react";

// import external file of folder
import "./TodoItem.css";


// dynamic class: render component có điều kiện 
class TodoItem extends Component {
    render() {
        const {title, isCompleted} = this.props.todo;
        const CheckComplete = isCompleted? "complete": "";
        return (
            // Get props from parents component (TodoList)
                <p className={CheckComplete}> {title} </p>
        )
    }
}

export default TodoItem;

// Virtual DOM: check xem DOM naò thay đổi thì thay đổi, ko change cả DOM tree
// Directed DOM: thay đổi cả DOM tree

// Props: có thể chuyền cả function 
// State
// Data binding: one-way databinding
// Angular: two-ways data binding


/** NOTES:
 * Because of using Class Component --> muốn truy xuất giá trị thì dùng this
 * props (arbitrary inputs) return React elements describing what should appear on the screen
 * 
 */