import React from "react"
import {Link, navigate} from "gatsby"

// import jsInterviewData from "../components/interviewData/jsInterviewData"

class Quiz extends React.Component {

    state = {
        quizData: this.props.location.state.interviewData,
        questionNumber: 0,
        quizAnswers: {},
        done: false

    }

    getPrevQuestion = () => {
        if (this.state.quizData.questions[this.state.questionNumber - 1]) {
            this.setState({
                questionNumber: this.state.questionNumber - 1
            })
        }
    }

    getNextQuestion = () => {
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
        let answer = event.target.value
        let answerArr = {...this.state.quizAnswers}
        answerArr[this.state.quizData.questions[this.state.questionNumber].id] = answer
        this.setState({
            quizAnswers: answerArr
        });
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <div>{this.state.quizData.questions[this.state.questionNumber].id}</div>
                <div>{this.state.quizData.questions[this.state.questionNumber].question}</div>
                <textarea onChange={this.handleTextArea}
                          value={this.state.quizAnswers[this.state.questionNumber + 1] ? this.state.quizAnswers[this.state.questionNumber + 1] : ""}
                          cols={40} rows={10}/>
                <button onClick={this.getPrevQuestion}>Prev Question</button>
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
