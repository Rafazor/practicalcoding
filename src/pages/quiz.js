import React from "react"
import {Link, navigate} from "gatsby"

class Quiz extends React.Component {

    state = {
        quizData: {},
        questionNumber: 0,
        quizAnswers: {},
        quizExamples: {},
        done: false,
        progress: 25
    }

    componentDidMount() {
        if (this.props.location.state.interviewData !== undefined) {
            this.setState(() => ({
                quizData: this.props.location.state.interviewData.questions,
            }));
        }
    }

    getPrevQuestion = () => {
        if (this.state.quizData[this.state.questionNumber - 1]) {
            this.setState({
                questionNumber: this.state.questionNumber - 1
            }, () => {
                this.calculateProgress(this.state.questionNumber + 1)
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
                this.calculateProgress(this.state.questionNumber + 1)
            })
        }
    }

    finishQuiz = () => {
        navigate("/interviewQuiz/", {
            state: {
                done: true,
                doneQuizData: this.state.quizData,
                userAnswers: this.state.quizAnswers,
                userExamples: this.state.quizExamples
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

    handleExamplesTextArea = (event) => {
        let answer = event.target.value
        let answerArr = {...this.state.quizExamples}
        answerArr[this.state.quizData[this.state.questionNumber].id] = answer
        this.setState({
            quizExamples: answerArr
        });
    }

    calculateProgress = (position = 0) => {
        let progress = (100 * position) / this.state.quizData.length
        this.setState((prevState) => (
            {
                ...prevState,
                progress: progress
            }
        ))
    }

    render() {
        let questionNumber = this.state.questionNumber
        return (
            <div className="container">
                <Link to="/">Home</Link>
                {
                    this.state.quizData.length > 0 &&
                    <>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar"
                                             style={{width: this.state.progress + "%"}}
                                             aria-valuenow={this.state.progress} aria-valuemin="0"
                                             aria-valuemax="100">{this.state.progress}%
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>{this.state.quizData[this.state.questionNumber].id}</div>
                                <div>{this.state.quizData[this.state.questionNumber].question}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div>
                                          <textarea onChange={this.handleTextArea}
                                                    value={this.state.quizAnswers[this.state.questionNumber + 1] ? this.state.quizAnswers[this.state.questionNumber + 1] : ""}
                                                    cols={40} rows={10}/>
                                    </div>
                                    <div>
                                          <textarea onChange={this.handleExamplesTextArea}
                                                    value={this.state.quizExamples[this.state.questionNumber + 1] ? this.state.quizExamples[this.state.questionNumber + 1] : ""}
                                                    cols={40} rows={10}/>
                                    </div>
                                    <div>
                                        <button onClick={this.getPrevQuestion}>Prev Question</button>
                                        <button onClick={this.getNextQuestion}>Next Question</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                {
                                    this.state.done === true &&
                                    <div>
                                        <button onClick={this.finishQuiz}>Finish Quiz!</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default Quiz;
