import React, { Component } from 'react';

import QuestionComponent from './QuestionComponent';
import ResultComponent from './ResultComponent';


class QuizzAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizData: [
                {
                    question: "Which language runs in a web browser?",
                    a: "Java",
                    b: "C",
                    c: "Python",
                    d: "JavaScript",
                    correct: "d",
                },
                {
                    question: "What does CSS stand for?",
                    a: "Central Style Sheets",
                    b: "Cascading Style Sheets",
                    c: "Cascading Simple Sheets",
                    d: "Cars SUVs Sailboats",
                    correct: "b",
                },
                {
                    question: "What does HTML stand for?",
                    a: "Hypertext Markup Language",
                    b: "Hypertext Markdown Language",
                    c: "Hyperloop Machine Language",
                    d: "Helicopters Terminals Motorboats Lamborginis",
                    correct: "a",
                },
                {
                    question: "What year was JavaScript launched?",
                    a: "1996",
                    b: "1995",
                    c: "1994",
                    d: "none of the above",
                    correct: "b",
                    }
            ],

            firstQuiz: {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
        };
    }

    // Method: check answer choice
    onSubmitCheckAnswer = (answer) => {
        console.log(answer);
    }


    render() {
        const {quizData} = this.state;
        let isTrue= true;

        return (
            <div>
                {
                    isTrue ? 
                    (
                        <QuestionComponent 
                            quizData={quizData}
                            onSubmitCheckAnswer={this.onSubmitCheckAnswer}
                        />
                    )
                    :
                    (
                        <ResultComponent quizData={quizData}/>

                    )
                }
            </div>
        );
    }
}

export default QuizzAppComponent;