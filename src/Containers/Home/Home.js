import React, { Component } from 'react';
import SearchUsers from '../../Components/SeachUsers/SearchUsers';
import UsersList from '../../Components/UsersList/UsersList';
import UserAPI from '../../Services/UserAPI';


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


    onFetchUsers = async (search) => {
        // fetch User (Dùng Axios)
        try {
           const response = await UserAPI.fetchUsers(search);
           this.setState({
               users: response.data.items,
           });
        } catch (error) {
            throw(error);
        }
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