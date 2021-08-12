import './App.css';
// import Car from './Car Folder/Car.js';
// import DemoState from './DemoState Folder/DemoState';

import SmartPhoneStore from './SmartPhoneStore Folder/SmartPhoneStore';
// import TodoList from "./Components Folder/TodoList";




function App() {
  
  return (
    <div className="App">
      {/* <h1> App Component </h1>
      <TodoList /> */}
      {/* <Car /> */}
      <SmartPhoneStore />
      {/* <DemoState /> */}
    </div>
  );
};

export default App;




// NOTES:
  // Functional Component
  // HTML and JS code combination (called JSX) must be packaged in return()

  // This file only allow 1 div tag
  // Khi đưa biến vào trong file này, phải dùng {}

  // JSX name: class --> className
  // single tag (self-closing tag) must have dấu sẹc : <img />

  // Conditional Rendering: render có điều kiện

/**
 * Functional Programming: code cho ReactJS 
 * Top-down programming: code function chạy từ trên xuống dưới
 * Object-oriented programming: Lập trình hướng đối tượng
 * Event-driven programming
 */ 




// Front-end cần consider luồng code như thế này trước khi hand on a project
/* 



  - ToDoWrapper: the web
    0. Header
    1. TodoInput
    2. TodoList
      - ToDoItem: include Props
        +
        +
      - ToDoItem
        +
        +
      - ToDoItem
        +
      - ToDoItem
        +
    3. TodoStatus
      - Button: all
      - Button: active
      - Button completed
*/



// EXPORT DEFAULT and normal Export difference:
// Khi xài Export default, nghĩa là sẽ export nguyên cả file lớn đó
// Khi xài export default, thì ko thể xài export normal 
    /** Ex:
     * Normal export: export TodoList; export const checked = 10;
     * --> Khi xài normal export, thì phải import component này vào componet khác
     * qua syntax sau:
     *              import {TodoList} from './Components/TodoList';
     *              import {TodoList, checked} from ......
     *              ---> normal import thì export dưới dạng object {}
     *  */ 
