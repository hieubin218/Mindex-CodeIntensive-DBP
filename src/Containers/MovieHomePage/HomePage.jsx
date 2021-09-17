import axios from 'axios';
import React, { Component } from 'react';
import Carousel  from '../../Components/Carousel/Carousel';
import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import SearchMovie from "../../Components/SearchBar/SearchMovie";


class HomePage extends Component {
    constructor(props) {
        super(props); 
        this.state={
            movies: [],
        };
    };

    onFetchPopularMovies = async() => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a32287ddc2296da6ef51bbca9953037d")
            this.setState({
                movies: response.data.results,
            })
        
        } catch (error) {
            throw(error);
        }
    }


    onFetchUpComingMovies = async() => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=a32287ddc2296da6ef51bbca9953037d")
            this.setState({
                movies: response.data.results,
            })
        
        } catch (error) {
            throw(error);
        }
    }


    onFetchTopRatedMovies = async() => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a32287ddc2296da6ef51bbca9953037d")
            this.setState({
                movies: response.data.results,
            })
        
        } catch (error) {
            throw(error);
        }
    }





    render() {
        return (
            <div>
                <Carousel />
                <SearchMovie />
                <MovieContainer movies={this.state.movies}  
                                onFetchPopularMovies={this.onFetchPopularMovies}
                                onFetchUpComingMovies={this.onFetchUpComingMovies}
                                onFetchTopRatedMovies={this.onFetchTopRatedMovies}
                                />

                
            </div>
        );
    }
}

export default HomePage;