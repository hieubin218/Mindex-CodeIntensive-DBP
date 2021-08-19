import React, { Component } from 'react';

class QuestionComponent extends Component {
    render() {
        // Receive props from Parents Component
        const {quizData, onSubmitCheckAnswer} = this.props;


        return (
            <div>
                {
                    quizData.map((eachQuestion) => {
                    const {question, a, b, c, d} = eachQuestion;
                    return (
                        <form className="question-container" action="action_page.php">
                            <div className="question-header">
                                <h1>Question {quizData.length} </h1>
                            </div>

                            <div className="question-text">
                                <h4>{question}</h4>
                            </div>

                            <div className="answer-selection" >
                                <input type="radio" id="1" name="quiz" defaultValue="a" />
                                <label htmlFor="a">
                                    {a}
                                </label> <br />

                                <input type="radio" id="2" name="quiz" defaultValue="b" />
                                <label htmlFor="b">
                                    {b}
                                </label><br />

                                <input type="radio" id="3" name="quiz" defaultValue="c" />
                                <label htmlFor="c">
                                    {c}
                                </label> <br />

                                <input type="radio" id="4" name="quiz" defaultValue="d" />
                                <label htmlFor="c">
                                    {d}
                                </label> <br />

                                <input type="submit" value="Submit" 
                                    onClick={ () => onSubmitCheckAnswer}
                                    
                                    />
                            </div>
                        </form>
                    
                    )})
                }
            </div>
        )
    }
}
export default QuestionComponent;