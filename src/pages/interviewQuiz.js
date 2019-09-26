import React from "react"
import {Link, navigate} from "gatsby"
import Layout from "../components/Layout"
import jsInterviewData from "../components/interviewData/jsInterviewData"
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faUser, faUserNinja} from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";

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
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Online Coding Books - Coding Interview Quiz</title>
                    <link rel="canonical" href="https://onlinecodingbooks.com/interviewQuiz/" />
                    <meta name="description"
                          content="This interview quiz will test your HTML5, CSS3, JavaScript, ECMAScript and Algorithms Knowledge!"/>
                </Helmet>
                <div className="container">
                    <section>
                        <div className={"row " + (this.state.done !== false ? 'd-none d-md-flex' : '')}>
                            <div className="col-sm-4 d-flex justify-content-center">
                                <img style={{maxHeight: "300px"}} className="img-fluid" src="/coding-icon.png"
                                     alt="coding icon"/>
                            </div>
                            <div className="col-sm-8">
                                <h1>Before you start!</h1>
                                <p>
                                    <div className="font-weight-bold">1. Cut out the distractions</div>
                                    <div>Distractions make it difficult to pay attention to what you’re doing, which in
                                        turn makes it harder to commit facts to memory. Give yourself a leg up by
                                        turning off the notifications on your phone, temporarily blocking your favorite
                                        websites, or sticking to instrumental music while you study (so you’re not
                                        tempted to sing along!).
                                    </div>
                                </p>
                                <p>
                                    <div className="font-weight-bold">2. Stay calm and confident</div>
                                    <div>Naturally, nerves will begin to kick in, but try to stay calm and confident.
                                        Take deep breaths and practice positive, self-affirmation thoughts in your mind.
                                        If you’ve done adequate research, you shouldn’t have anything to fret about.
                                    </div>
                                </p>
                                <p>
                                    <div className="font-weight-bold">3. Avoid getting stuck</div>
                                    <div>If you notice that you are stuck on one particular question, or spending too
                                        much time on a really detailed answer, go to the next question. Go back at the
                                        end of the test to fill in anything you missed.
                                    </div>
                                </p>

                            </div>
                        </div>
                        <div className="row link d-flex justify-content-center mt-2">
                            <button className="btn" onClick={this.getQuizSet}>
                                <span
                                    className="btn-content">{this.state.done !== false ? "Restart" : "Start"} Quiz!</span>
                                <span className="icon"><FontAwesomeIcon icon={faArrowRight}/></span>
                            </button>
                        </div>
                    </section>
                    {
                        this.state.done === true &&
                        <section>
                            {
                                this.state.doneQuizData.map(function (item, i) {
                                    return (
                                        <div key={i}>
                                            <div className="row">
                                                <div
                                                    className="col-sm-12 text-center font-weight-bold question-title mb-3">
                                                    <div className="pb-1 border-bottom">{item.question}</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div
                                                        className="d-flex justify-content-center text-success answer-icon mb-3">
                                                        <FontAwesomeIcon icon={faUser}/></div>
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
                                                    <div
                                                        className="d-flex justify-content-center text-danger answer-icon mb-3">
                                                        <FontAwesomeIcon icon={faUserNinja}/></div>
                                                    <div className="text-justify">{item.answer}</div>
                                                    {item.example &&
                                                    <SyntaxHighlighter language="javascript" style={docco}
                                                                       showLineNumbers={true}
                                                                       lineNumberStyle={{color: "#ff704d"}}>
                                                        {item.example}
                                                    </SyntaxHighlighter>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    }
                </div>
            </Layout>
        )
    }
}

export default InterviewQuiz
