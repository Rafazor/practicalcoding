import React from "react"
import {Link, navigate} from "gatsby"
import Layout from "../components/Layout"
import jsInterviewData from "../components/interviewData/jsInterviewData"

class InterviewQuiz extends React.Component {

    getQuizSet = () => {
        let data = jsInterviewData[Math.floor(Math.random() * jsInterviewData.length)];
        navigate("/quiz/", {
            state: {interviewData: data}
        })
    }

    render() {
        let doneQuizData
        let userAnswers

        if (this.props.location.state.doneQuizData && this.props.location.state.userAnswers) {
            doneQuizData = this.props.location.state.doneQuizData.questions
            userAnswers = this.props.location.state.userAnswers
        }
        return (
            <Layout>
                <div className="container">
                    <Link to="/">Home</Link>
                    <div onClick={this.getQuizSet}>START</div>
                    {
                        this.props.location.state.done === true &&
                        <>
                            {
                                doneQuizData.map(function (item, i) {
                                    console.log(item);
                                    return (
                                        <>
                                            <div className="row">
                                                <div className="col-sm-12">{item.question}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {userAnswers[item.id]}
                                                </div>
                                                <div className="col-md-6">
                                                    <div>{item.answer}</div>
                                                    <div>{item.example}</div>
                                                    <div>{item.tip}</div>
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
