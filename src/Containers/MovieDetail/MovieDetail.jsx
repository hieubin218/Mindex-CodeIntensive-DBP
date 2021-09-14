import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            movie: {},
            isLoading: false,
        }
    }

    async componentDidMount() {
        try {
            this.setState({
                isLoading: true,
            })

            
            
        } catch(error) {
            throw(error);
        }
    }

    onBacktoMovieHomePage = () => {
        this.props.history.push("...");
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MovieDetail;