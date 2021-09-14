import React, { Component } from 'react';
import Carousel  from '../../Components/Carousel/Carousel';
import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import SearchMovie from "../../Components/SearchBar/SearchMovie";


class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <SearchMovie />
                <MovieContainer />

                
            </div>
        );
    }
}

export default HomePage;