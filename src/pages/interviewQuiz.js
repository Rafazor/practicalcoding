import React from "react"
import {Link, navigate} from "gatsby"
import Layout from "../components/Layout"
import jsInterviewData from "../components/interviewData/jsInterviewData"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

class InterviewQuiz extends React.Component {

    state = {
        doneQuizData: [],
        userAnswers: [],
        userExamples: [],
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
                    userExamples: this.props.location.state.userExamples,
                    done: this.props.location.state.done
                }
            ));
        }
    }

    render() {
        const userAnswers = this.state.userAnswers
        const userExamples = this.state.userExamples

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
                                        <div key={i}>
                                            <div className="row">
                                                <div className="col-sm-12">{item.question}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="preview-answer">
                                                        {userAnswers[item.id]}
                                                    </div>
                                                    {userExamples[item.id] &&
                                                    <SyntaxHighlighter language="javascript" style={docco}
                                                                       showLineNumbers={true}
                                                                       lineNumberStyle={{color: "#ff704d"}}>
                                                        {userExamples[item.id]}
                                                    </SyntaxHighlighter>
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="preview-answer">{item.answer}</div>
                                                    {item.example &&
                                                    <SyntaxHighlighter language="javascript" style={docco}
                                                                       showLineNumbers={true}
                                                                       lineNumberStyle={{color: "#ff704d"}}>
                                                        {item.example}
                                                    </SyntaxHighlighter>
                                                    }
                                                    <div className="preview-answer">{item.tip}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </Layout>
        )
    }
}

export default InterviewQuiz
