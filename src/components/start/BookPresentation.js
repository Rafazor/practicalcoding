import React from "react"
import {Link} from "gatsby"

export default () => (
    <section className="section-1">
        <div className="container">
            <div className="row pt-4 pb-4 flex-column-reverse flex-md-row">
                <div className="col-md-6">
                    <h4>Coding Interview: Learn How To Solve Programming Questions and Algorithms </h4>
                    <p>
                        Mеаl Prеррing mеrеlу is рrераring some, or аll оf уоur meals аhеаd оf timе. It’s likе hаving
                        thоѕе
                        TV dinnеrѕ thаt you should purchase frоm thе ѕtоrе, еxсерt thаt уоu рrераrе them yourself, with
                        bеttеr, hеаlthiеr аnd unрrосеѕѕеd ingrеdiеntѕ.
                    </p>


                            <Link to={"/"} className="btn link btn-lg">Get The Book Today!</Link>



                </div>
                <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={"cover-paperback.png"}
                                     style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid" alt="book"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={"kindle.png"}
                                    style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid" alt="ebook"/>
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
