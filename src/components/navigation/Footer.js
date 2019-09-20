import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faCoffee} from '@fortawesome/free-solid-svg-icons'

export default () => (
    <footer className="footer d-flex align-content-center">
        <div className="container d-flex justify-content-center">
            <div className="row align-items-center">
                <div className="col-sm-12">
                    This website was made with <FontAwesomeIcon className="text-danger"
                                                                icon={faHeart}/> and <FontAwesomeIcon
                    className="text-warning" icon={faCoffee}/> by <span
                    className="text-danger font-weight-bold">Online Coding Books</span>
                </div>
            </div>

        </div>
    </footer>
)
