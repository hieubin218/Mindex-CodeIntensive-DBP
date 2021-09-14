import React, { Component } from 'react';
import MovieItem from "../MovieItem/MovieItem";

class MovieContainer extends Component {
    render() {
        return (
            <div>
               <h3 className="Popular-Movies"> </h3>

               <MovieItem />

                
            </div>
        );
    }
}

export default MovieContainer;