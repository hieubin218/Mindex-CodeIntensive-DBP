import React, { Component } from 'react';
import "./SearchMovie.css";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchMovie: "",
        };
    }

    onSearchMovie = (event) => {
        this.setState({
            searchMovie: event.target.value,
        });
    }


    render() {
        const {searchMovie} = this.state;
        return (
            <div style={{display: "flex"}}>
                <span className="SearchButton">Hello</span>
                <input  className="searchBar"
                        type="text"
                        placeholder="Search Movie and Click Enter"
                        name="searchMovie"
                        value={searchMovie}
                        onChange={this.onSearchMovie}
                />
                
            </div>
        );
    }
}

export default Search;