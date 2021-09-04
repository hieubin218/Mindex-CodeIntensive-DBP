import axios from 'axios';
import React, { Component } from 'react';
import Button from "../../Components/Button/Button";

// in Component (Inspect) --> UserDetail --> props: history, match (param (login), path, url), staticContext
class UserDetail extends Component {    
    state = {
        userDetail: {},
    }; 

    async componentDidMount() {
        const login = this.props.match.params.login;
        const response = await axios.get(`https://api.github.com/users/${login}`)

        this.setState ({
            userDetail: response.data,
        });
    }

    // Button Back to Home -> history.push will direct to other page
    onBacktoHome = () => {
        this.props.history.push("/");
        // this.props.history.history.goBack();
    }

    render() {
        return (
            <div>
                <Button label="back to Home" 
                        onClick={this.onBacktoHome}
                        color="success"
                        />
                        User UserDetail
                
            </div>
        );
    }
}

export default UserDetail;

// Use <a href=""> for External Link
// Use <Link to=""> for Internal Link