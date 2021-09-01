import React, { Component } from 'react';
import "./SearchUsers.css";

// Step 1: Request API (extract data)
// Step 2: Truyền Data ra ngoài Component Cha 
// Step 3: Render giao diện ở Component con


// SearchUser trong Home page
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
        event.preventdefault();

        // Home Component will execute fetchUser() method --> then set State
        this.props.onFetchUsers(this.state.search);
        this.setState({
            search: "",
        });
    };


    render() {
        const {search} = this.state;
        return (
            <div className="search">
                <form onSubmit={this.onSubmitSearchUser}>
                    <input className="search_input" 
                            name="search" 
                            placeholder="Enter username here..."
                            value={search}
                            onChange={this.onSearchUserChange} 
                    />

                    <button type="submit" 
                            className="btn btn-primary search_btn">
                            Search
                    </button>
                </form>
            </div>
           
        );
    }
}

export default SearchUsers;