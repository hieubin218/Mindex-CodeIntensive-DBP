import axios from 'axios';
import React, { Component } from 'react';


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

    render() {
        return (
            <div>
            User UserDetail
                
            </div>
        );
    }
}

export default UserDetail;