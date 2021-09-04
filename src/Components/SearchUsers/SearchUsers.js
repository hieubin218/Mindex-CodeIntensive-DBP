import React, { Component } from 'react';
import "./SearchUsers.css";
import Button from "../Button/Button";
// Step 1: Request API (extract data)
// Step 2: Truyền Data ra ngoài Component Cha 
// Step 3: Render giao diện ở Component con


// SearchUser trong Home pag e
// Home
    // SearchUsers
    // UsersList

class SearchUsers extends Component {
    constructor(props) {
        super(props);
        this.state={
            search: "",
        };
    }

    onSearchUserChange = (e) => {
        this.setState({
            search: e.target.value,
        });
    };

    // OnSubmit transmits back to Home Component
    onSubmitSearchUser = (event) => {
        event.preventDefault();

        // Home Component will execute fetchUser() method --> then set State
        this.props.onFetchUsers(this.state.search);
        this.setState({
            search: "",
        });
    };


    render() {
        const {search} = this.state;
        const {isShowButtonClear, onClearUsers} = this.props;
        return (
            <div className="search">
                <form onSubmit={this.onSubmitSearchUser}>
                    <input className="search_input" 
                            name="search" 
                            placeholder="Enter username here..."
                            value={search}
                            onChange={this.onSearchUserChange} 
                    />


                    <Button label="search" type="submit" color="primary" />

                    {/* <button type="submit" 
                            className="btn btn-primary search_btn">
                            Search
                    </button> */}


                    {
                        isShowButtonClear && (
                            /* <button type="submit" 
                                className="btn btn-danger search_btn"
                                onClick={onClearUsers}>
                                Clear Users
                            </button> */

                            <Button 
                                label="Clear Users" 
                                type="button" 
                                color="danger"
                                onClick={onClearUsers} />

                        )
                    }

                </form>
            </div>
           
        );
    }
}

export default SearchUsers;

// Default Values for Props