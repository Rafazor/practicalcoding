import React from "react"
import {Link} from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


export default () => (
    <section className="section-1">
        <div className="container">
            <div className="row pt-4 pb-4 flex-column-reverse flex-md-row">
                <div className="col-md-6 d-flex justify-content-between flex-column">
                    <div>
                        <h4 className="mb-3">Coding Interview: Learn How To Solve Programming Questions and
                            Algorithms </h4>
                        <p className="mb-2">
                            We selected all the top interview topics that are relevant in 2019 and 2020 for a javascript
                            and front end developer!
                        </p>
                        <p className="mb-2">All topics are explained by our experienced developers with examples and must known info before going to an interview.</p>
                        <p>This book is mainly focused on HTML5, CSS3, JavaScript, ECMAScript and Algorithms.</p>
                    </div>
                    <div className="link">
                        <Link to={"/"} className="btn">
                            <span className="btn-content">Get Your Book Today!</span>
                            <span className="icon"><FontAwesomeIcon icon={faArrowRight}/></span>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={"cover-paperback.png"}
                                     style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid"
                                     alt="book"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={"kindle.png"}
                                    style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid"
                                    alt="ebook"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"
                              style={{filter: "contrast(0%)"}}></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"
                              style={{filter: "contrast(0%)"}}></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
