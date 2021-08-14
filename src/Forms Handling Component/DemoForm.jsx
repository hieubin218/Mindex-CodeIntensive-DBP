import React, { Component } from 'react';

class DemoForm extends Component {
    state = {
        username: "",
        password: "",   
    };

    // ES6: Object Literals
    onChangeHandler = (event) => {
        const {name, value} = event.target;

        this.setState({
            // dynamic key
            [name]: value,  // name (username, password) = update => value (user input)
        });
    }


    // onUsernameChange = (event) => {
    //     // name là name of input tag, value is input from user
    //     // event.target hs multiple stuffs, but "value" is all we need
    //     const {name, value} = event.target;
    //     this.setState({
    //         username: value,
    //     })

    // }

    // onPasswordChange = (event) => {
    //     const {name, value} = event.target;
    //     this.setState({
    //         password: value,
    //     })

    // }
    onSubmitHandler = (event) => {
        // phải có, muốn xử lý gì đo trước khi submit cái form xuống backend xử lý
        event.preventDefault();

        // Call API them product vao cart

    }



    render() {
        return (
            <div>
                <h1 className="text-center">Demo Form ReactJS</h1>

                {/**Form Design */}
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>

                        {/**name của input sẽ trùng cái property key của state object line 4 */}
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username} />
                    </div>

                    <div>
                        <label htmlFor="password">Password </label>
                        <input type="text" name="password" onChange={this.onChangeHandler} value={this.state.password}/>
                    </div>

                    <button type="submit">Log In</button>
                </form>
                
            </div>
        );
    }
}

export default DemoForm;