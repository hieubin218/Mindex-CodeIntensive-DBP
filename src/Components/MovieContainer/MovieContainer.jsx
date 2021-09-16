import React, { Component } from 'react';
import MovieItem from "../MovieItem/MovieItem";

class MovieContainer extends Component {
    render() {
        const {movies, onFetchPopularMovies, onFetchUpComingMovies, onFetchTopRatedMovies} = this.props;
        return (
            <div className="row">
               <button onClick={onFetchPopularMovies}> Popular Movies </button>
               <button onClick={onFetchUpComingMovies}> UpComing Movies </button>
               <button onClick={onFetchTopRatedMovies}> Top Rating Movies </button>
               {
                   movies.map((item, index) => {
                       return (
                           <MovieItem item={item} key={index} />
                       )
                   })
               }
            </div>
        );
    }
}

export default MovieContainer;