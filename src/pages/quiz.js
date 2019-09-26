import React from "react"
import {Link, navigate} from "gatsby"

import Loadable from "react-loadable";

const AceEditor = Loadable({
    loader: () => import('../components/AceEditor'),
    loading() {
        return null
    }
});

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

    handleExamplesTextArea = (code) => {
        let answer = code
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
        return (
            <div className="container pt-3 pb-3 quiz-container">
                <div className="mb-3 mt-3 clearfix">
                    {
                        this.state.done === true &&
                        <button className="btn btn-success float-left" onClick={this.finishQuiz}>Check Quiz
                            Results!
                        </button>
                    }
                    <Link className="btn btn-danger float-right" to="/interviewQuiz/">Close Quiz!</Link>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="progress mb-3 mt-3" style={{height: "20px"}}>
                            <div
                                className={"progress-bar progress-bar-striped progress-bar-animated " + (this.state.done === true ? "bg-success" : "bg-warning")}
                                role="progressbar"
                                style={{width: this.state.progress + "%", fontWeight: "bold"}}
                                aria-valuenow={this.state.progress}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {this.state.progress}%
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.state.quizData.length > 0 &&
                    <>
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="text-center mb-4">{this.state.quizData[this.state.questionNumber].question}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center mb-5">
                                <div style={{width: "600px"}}>
                                    <div className="mb-3">
                                        <div className="form-group">
                                            <label htmlFor="response-text-area" className="font-weight-bold">Add your response here.</label>
                                            <textarea onChange={this.handleTextArea}
                                                      value={this.state.quizAnswers[this.state.questionNumber + 1] ? this.state.quizAnswers[this.state.questionNumber + 1] : ""}
                                                      className="form-control" id="response-text-area" rows="3"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        {this.state.quizData[this.state.questionNumber].example &&
                                        <>
                                            <div className="font-weight-bold pb-2">Can you give an example?</div>
                                            <AceEditor handleExamplesTextArea={this.handleExamplesTextArea}
                                                       quizExamples={this.state.quizExamples}
                                                       questionNumber={this.state.questionNumber}
                                                       currentQuiz={this.state.quizData[this.state.questionNumber]}
                                            />
                                        </>
                                        }
                                    </div>
                                    <div className="mb-5">
                                        {
                                            this.state.questionNumber > 0 &&
                                            <button className="btn btn-primary float-left"
                                                    onClick={this.getPrevQuestion}>Prev
                                                Question
                                            </button>
                                        }
                                        {
                                            this.state.questionNumber < this.state.quizData.length - 1 &&
                                            <button className="btn btn-primary float-right"
                                                    onClick={this.getNextQuestion}>Next
                                                Question
                                            </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                {
                                    this.state.done === true &&
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-success btn-lg"
                                                onClick={this.finishQuiz}>Check Quiz Results!
                                        </button>
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
