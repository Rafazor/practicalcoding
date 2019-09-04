import React from "react"
import {Link, navigate} from "gatsby"

// import jsInterviewData from "../components/interviewData/jsInterviewData"

class Quiz extends React.Component {

    state = {
        quizData: this.props.location.state.interviewData,
        questionNumber: 0,
        quizAnswers: {},
        textAreaPrev: "",
        textAreaStatic: "Add your answer here!",
        textAreaValue: "Add your answer here!",
        done: true

    }
    getPrevQuestion = () => {

    }

    addAnswer = () => {
        let answers = {...this.state.quizAnswers}
        answers[this.state.quizData.questions[this.state.questionNumber].id] = this.state.textAreaValue
        this.setState({
            quizAnswers: answers
        })
    }

    getNextQuestion = () => {
        this.addAnswer();

        if (this.state.quizData.questions[this.state.questionNumber + 1]) {
            this.setState({
                questionNumber: this.state.questionNumber + 1
            })
        } else {
            this.setState({
                done: true
            })
        }


    }

    finishQuiz = () => {
        navigate("/interviewQuiz/", {
            state: {
                done: true,
                doneQuizData: this.state.quizData,
                userAnswers: this.state.quizAnswers
            }
        })
    }

    handleTextArea = (event) => {
        this.setState({textAreaValue: event.target.value});
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <div>{this.state.quizData.questions[this.state.questionNumber].id}</div>
                <div>{this.state.quizData.questions[this.state.questionNumber].question}</div>
                <textarea onChange={this.handleTextArea} value={this.state.textAreaValue} cols={40} rows={10}/>
                <button onClick={this.getNextQuestion}>Next Question</button>
                {
                    this.state.done === true &&
                    <div>
                        <button onClick={this.finishQuiz}>Finish Quiz!</button>
                    </div>
                }
            </div>
        )
    }
}

export default Quiz;
