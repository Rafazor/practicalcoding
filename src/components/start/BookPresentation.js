import React from "react"
import {Link} from "gatsby"

export default () => (
    <div className="row">
        <div className="col-md-6">
            <h4>MEAL PREP: The Complete Cookbook To Clean Eating, Weight Loss And Food Savings With Easy To Cook
                Recipes </h4>
            <p>
                Mеаl Prеррing mеrеlу is рrераring some, or аll оf уоur meals аhеаd оf timе. It’s likе hаving
                thоѕе
                TV dinnеrѕ thаt you should purchase frоm thе ѕtоrе, еxсерt thаt уоu рrераrе them yourself, with
                bеttеr, hеаlthiеr аnd unрrосеѕѕеd ingrеdiеntѕ.
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link to="/jsInterviewTestBook/" className="btn btn-outline-primary btn-lg">Preview Book
                    Content</Link>
                <Link to="/interviewQuiz/" className="btn btn-outline-primary btn-lg">Start Interview Quiz</Link>
                <button type="button" className="btn btn-outline-success btn-lg">Buy The Book Today</button>
            </div>
        </div>
        <div className="col-md-6">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/5f/60/36/5f6036ea0bccb9c6ac28ab6d7844297d.jpg"
                             style={{maxHeight: "400px", margin: "0 auto"}} className="d-block" alt="book"/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://media.nbb-cdn.de/images/products/300000/303145/2_DE_tolino-vision-4-HD_eBook-Reader_smartLight_geneigt-1.jpg?size=2800"
                            style={{maxHeight: "400px", margin: "0 auto"}} className="d-block" alt="ebook"/>
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
)
