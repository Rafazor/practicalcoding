import React from "react"
import {Link, navigate} from "gatsby"
import Layout from "../components/Layout"
import jsInterviewData from "../components/interviewData/jsInterviewData"

class InterviewQuiz extends React.Component {

    state = {
        doneQuizData: [],
        userAnswers: [],
        done: false
    }

    getQuizSet = () => {
        let data = jsInterviewData[Math.floor(Math.random() * jsInterviewData.length)];
        navigate("/quiz/", {
            state: {interviewData: data}
        })
    }

    componentDidMount() {
        if (this.props.location.state.done !== undefined) {
            this.setState(() => ({
                    doneQuizData: this.props.location.state.doneQuizData,
                    userAnswers: this.props.location.state.userAnswers,
                    done: this.props.location.state.done
                }
            ));
        }
    }


    render() {
        const userAnswers = this.state.userAnswers

        return (
            <Layout>
                <div className="container">
                    <Link to="/">Home</Link>
                    <div onClick={this.getQuizSet}>START</div>
                    {
                        this.state.done === true &&
                        <>
                            {
                                this.state.doneQuizData.map(function (item, i) {
                                    return (
                                        <>
                                            <div className="row">
                                                <div className="col-sm-12">{item.question}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="preview-answer">
                                                        {userAnswers[item.id]}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="preview-answer">{item.answer}</div>
                                                    <div className="preview-answer">{item.example}</div>
                                                    <div className="preview-answer">{item.tip}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </>
                    }
                    <div>Salut de pe quiz1!</div>
                    <div>Salut de pe quiz2!</div>
                    <div>Salut de pe quiz3!</div>
                </div>
            </Layout>
        )
    }
}

export default InterviewQuiz
