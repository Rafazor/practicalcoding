import React from "react"
import {Link, navigate} from "gatsby"

class Quiz extends React.Component {

    state = {
        quizData: {},
        questionNumber: 0,
        quizAnswers: {},
        done: false

    }

    componentDidMount() {
        if (this.props.location.state.interviewData !== undefined) {
            this.setState(() => ({
                    quizData: this.props.location.state.interviewData.questions,
                }
            ));
        }
    }

    getPrevQuestion = () => {
        if (this.state.quizData[this.state.questionNumber - 1]) {
            this.setState({
                questionNumber: this.state.questionNumber - 1
            })
        }
    }

    getNextQuestion = () => {
        if (this.state.quizData[this.state.questionNumber + 1]) {
            this.setState({
                questionNumber: this.state.questionNumber + 1
            }, () => {
                if (this.state.questionNumber + 1 === this.state.quizData.length) {
                    this.setState({
                        done: true
                    })
                }
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
        answerArr[this.state.quizData[this.state.questionNumber].id] = answer
        this.setState({
            quizAnswers: answerArr
        });
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                {
                    this.state.quizData.length > 0 &&
                    <>
                        <div>{this.state.quizData[this.state.questionNumber].id}</div>
                        <div>{this.state.quizData[this.state.questionNumber].question}</div>
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
                    </>
                }
            </div>
        )
    }
}

export default Quiz;
