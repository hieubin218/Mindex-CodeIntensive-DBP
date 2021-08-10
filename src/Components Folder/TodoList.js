// Class Component (Stateful Component) is Class

    // 1. Import React
import React, {Component} from "react";
import TodoItem from './TodoItemFolder/TodoItem';



class TodoList extends Component {
    /* Constructor function: hàm khởi tạo trong hàm class
       Constructor has a keyword super() --> kế thừa props của Component */
    constructor() {
        super();
        this.todos = ["Learn React", "Learn Front-end", "Check Mail", "Check Cryto"];

        this.todos = [
            {
                title: "Learn React",
                isCompleted: false,
            },
            {
                title: "Learn Front-end",
                isCompleted: true,
            },
            {
                title: "Learn Angular",
                isCompleted: false,
            },
            {
                title: "Learn Crypto",
                isCompleted: true,
            },
        ];
    }

    // Method (hàm trong class nên ko dùng const, vì nó là method)
    onClickHandler = (param) => {
        alert(`Hello ${param}`);
    }

    // Khái niệm về props (component cha truyền xuống component con)
    // Line 19-26
    render() {
        return (
            <div>
                <h1> Todo List </h1>

                {/* Event Handler */}
                    {/** When only be clicked () => this.functionName 
                        Function có tham số ==> () => this.functionName(" ")
                    */ 

                <button onClick={() => this.onClickHandler("Hieu Dang")}>Click Me</button>
                
                /* {
                    this.todos.map((item, index) => {
                        return <TodoItem title={item} key={index} />;
                })} */}

                {
                    this.todos.map((item, index) => {
                        return <TodoItem todo={item} key={index} />;
                })}
            </div>
        );
    }
}


export default TodoList;

// Render Element & Data binding:
    /**
     * ReactJS hoạt động theo cơ chế one-way data binding
     * ReactJS cho phép lồng Javascript thông qua dấu {}
     */


// Dùng map() trong component thì dùng dấu {}
// map() with array --> value is title={}
// map() with object --> value is each object
// callbackFunction(value, index, array)
    // --> value: "string"
    // --> index: Number
// Component should has attribute key={}



/** KHÁI NIỆM:
    1. Constructor() and Render():
        - khi class được khởi tạo, constructor sẽ chạy trước render 
        --> lifecircle
    2. Props():
        - trong mỗi component sẽ có title, còn gọi là props
            ex: <TodoItem title="first props" />
        - props là dữ liệu truyền từ component cha xuống component con 
        - component con cant change, but conponent cha does
        - Cùng 1 component => props khác nhau => render giao diện khác nhau


*/



// Export default and normal Export difference:
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

