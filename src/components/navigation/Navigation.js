import React from "react"
import {Link} from "gatsby"


export default () => (
    <nav className="navbar navbar-expand-md navbar-light navigation-color start-nav shadow-sm">
        <div className="container">
            <Link to={'/'} className="navbar-brand"><img style={{maxWidth: "230px"}} className="img-fluid" src={"/logo.png"} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
                <div className="navbar-nav text-right">
                    <Link to="/interviewQuiz/" className="nav-item nav-link">Interview Quiz</Link>
                    <Link to={"/"} className="nav-item nav-link">About</Link>
                    <a className="nav-item nav-link" href="www.amazon.com" target="_blank">Shop</a>
                </div>
            </div>
        </div>
    </nav>
)
