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
            <div className="row">
                <div className="input-group">
                    <h3 className="search-header">Search Your Favorite Movie</h3>
                    <span className="input-group">
                        <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                                type="button">  
                                <i className="fa fa-search"></i>      
                        </button>
                    </span>
                                    
                    <input  className="form-control border-end-0 border rounded-pill ms-n5"
                            type="search"
                            placeholder="Search Movie and Click Enter"
                            name="searchMovie"
                            value={searchMovie}
                            onChange={this.onSearchMovie}
                    /> 
                </div>
            </div>
        );
    }
}

export default Search;