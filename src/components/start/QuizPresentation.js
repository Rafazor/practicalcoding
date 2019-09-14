import React from "react"
import {Link} from "gatsby"

export default () => (
    <section className="section-2">
        <div className="container">
            <div className="row pt-4 pb-4">
                <div className="col-md-6">
                    <img src={"mockuper.png"}
                         style={{maxHeight: "400px", margin: "0 auto"}} className="d-block img-fluid" alt="book"/>
                </div>
                <div className="col-md-6">
                    <h4>Coding Interview: Learn How To Solve Programming Questions and Algorithms </h4>
                    <p>
                        Mеаl Prеррing mеrеlу is рrераring some, or аll оf уоur meals аhеаd оf timе. It’s likе hаving
                        thоѕе
                        TV dinnеrѕ thаt you should purchase frоm thе ѕtоrе, еxсерt thаt уоu рrераrе them yourself, with
                        bеttеr, hеаlthiеr аnd unрrосеѕѕеd ingrеdiеntѕ.
                    </p>
                    <Link to="/interviewQuiz/" className="btn link btn-lg">Start Interview Quiz!</Link>
                </div>
            </div>
        </div>
    </section>
)
