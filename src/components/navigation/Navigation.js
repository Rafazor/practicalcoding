import React from "react"
import {Link} from "gatsby"


export default () => (
    <nav className="navbar navbar-expand-md navbar-light navigation-color start-nav">
        <div className="container">
            <Link to={'/'} className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
                <div className="navbar-nav text-right">
                    <Link className="nav-item nav-link" href="#">Interview Quiz</Link>
                    <Link className="nav-item nav-link" href="#">About</Link>
                    <a className="nav-item nav-link" href="www.amazon.com" target="_blank">Shop</a>
                </div>
            </div>
        </div>
    </nav>
)
