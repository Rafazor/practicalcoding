import React from "react"
import {Link} from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default () => (
    <section className="section-2">
        <div className="container">
            <div className="row pt-4 pb-4">
                <div className="col-md-6">
                    <img src={"mockuper.png"}
                         style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid" alt="book"/>
                </div>
                <div className="col-md-6 d-flex justify-content-between flex-column">
                    <div>
                        <h4 className="mb-3">Enhance Your Knowledge!</h4>
                        <p className="mb-2">
                            Test your technical interview skills with our programming questions and algorithms!
                        </p>
                        <p className="mb-2">Compare your results with our suggested answers and algorithms solutions!</p>
                        <p>This interview quiz will test your HTML5, CSS3, JavaScript, ECMAScript and Algorithms Knowledge!</p>
                    </div>
                    <div className="d-flex justify-content-end link">
                        <Link to="/interviewQuiz/" className="btn">
                            <span className="btn-content">Start Interview Quiz!</span>
                            <span className="icon"><FontAwesomeIcon icon={faArrowRight}/></span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
