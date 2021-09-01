import React, { Component } from 'react';
import SearchUsers from '../../Components/SeachUsers/SearchUsers';
import axios from "axios";
import UsersList from '../../Components/UsersList/UsersList';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    };


    // search: username input from user
        // Request Data from Axios: Response là cái Promise nhận về
        // Promise (pending) state ==> cần then và catch 


    onFetchUsers = (search) => {
        // fetch User (Dùng Axios)
        axios
            .get(`https://api.github.com/search/users?q=${search}`)
            .then((response) => {
                console.log(response)
            
                // this.setState({
                //     // Find the an item {id, name,..} of items 
                //     users: response.data.items,
                // });
            }).catch((error) => {
                throw(error);
            })

        // Set State 

    };

    /** Solution 2: async
     * fetchUser = async (search) => {
     * try {
     *      const response = await axios.get(`...`)
     * };
     * 
     * this.setState({
     *  users: response.data.items,
     * });
     * catch (error) {
     *      throw(error)}               
     * } 
     * */ 

    render() {
        const {users} = this.state;
        return (
            <div>
                <SearchUsers onFetchUsers={this.onFetchUsers}/>
                <UsersList users={users} />
                
            </div>
        );
    }
}

export default Home;