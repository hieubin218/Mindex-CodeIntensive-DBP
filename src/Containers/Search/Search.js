import React, { Component } from 'react';
import SearchUsers from '../../Components/SeachUsers/SearchUsers';
import UsersList from '../../Components/UsersList/UsersList';
import UserAPI from '../../Services/UserAPI';
import Alert from "../../Layouts/Alert/Alert";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            // not fetching Data -> false
            isLoading: false,
            isShowButtonClear: false,
            isAlert: false,
        };
    };


    // search: username input from user
        // Request Data from Axios: Response là cái Promise nhận về
        // Promise (pending) state ==> cần then và catch 


    onFetchUsers = async (search) => {
        // search is null, show Alert
        if (!search) {
            this.setState({
                isAlert: true,
            });
            // Off Alert after 2 seconds
            setTimeout(() => {
                this.setState({
                    isAlert: false,
                });
            }, 2000);

            return;  

        }
        // fetch User (Dùng Axios)
        try {
            this.setState({
                isLoading: true,
            });
           const response = await UserAPI.searchUser(search);
           
           // !loading (False)


           this.setState({
               users: response.data.items,
               isLoading: false,
               isShowButtonClear: true,
           });
        } catch (error) {
            throw(error);
        }
    };

    onClearUsers = () => {
        this.setState({
            users: [],
            isShowButtonClear: false,
        });

    }

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
        const {users, isAlert, isLoading, isShowButtonClear} = this.state;
        return (
            <div>
                {isAlert && (
                    <Alert message="Please Enter Before Searching"
                            type= "danger" />
                )}

                <SearchUsers onFetchUsers={this.onFetchUsers} 
                             isShowButtonClear={isShowButtonClear}
                             onClearUsers={this.onClearUsers}

                />
                <UsersList users={users} isLoading={isLoading} />
                
            </div>
        );
    }
}

export default Search;