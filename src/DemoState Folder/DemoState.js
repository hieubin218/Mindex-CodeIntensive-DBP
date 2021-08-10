// rcc: shortcut to create Class Component
import React, { Component } from 'react';


// DemoState kế thừa Component của React
// super(props) kế thừa những gì Component có 
export default class DemoState extends Component {
    constructor(props) {
        super(props);
        // this.state = {...} Object
        this.state = {
            isAuthenticated: false,  // key
        };

        // Thuoc Tinh Username
        this.username = "Hieu Dang";
    }

    // Login Method
    // Muốn thay đổi state thì phải dùng setState 
    // Khi State thay đổi, component sẽ render lại 
    onLogin = () => {
        this.setState({
            isAuthenticated: true,
        });
    }

    // Logout Method
    onLogOut = () => {
        this.setState({
            isAuthenticated: false,
        });
    }

    render() {
        return (
            <div>
                <h1> Demo State</h1>
                {
                    this.state.isAuthenticated ? 
                    <div>
                        <p>Hello {this.username} </p>,
                        <button onClick={this.onLogOut}>Log out</button>
                    </div>
                    : (<button onClick={this.onLogin}>Click Me to log in</button>)
                }
            </div>
        );
    }
}


// Luồng đi bài này từ đầu -> cuối: 
    // Constructor -> Render --> Render (Click button) --> Method --> new Render
    /**
     *  State sẽ giúp xác định được trạng thái của Component, và Component chỉ được render lại khi State thay đổi
     *  Muốn thay đổi State, phải thông qua hàm setState 
     * setState được kế thừa của React Component 
     */

    
