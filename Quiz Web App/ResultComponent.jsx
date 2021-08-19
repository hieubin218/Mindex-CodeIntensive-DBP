import React, { Component } from 'react';

class ResultComponent extends Component {
    render() {
        const {quizData, score} = this.props;

        return (
            <form className="results">
                <h3>You answered {score}/{quizData.length} questions correctly </h3>
                <button className="btn btn-primary">Reload</button>
            </form>
        );
    }
}

export default ResultComponent;