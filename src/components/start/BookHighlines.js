import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward, faBookOpen, faUserCheck} from '@fortawesome/free-solid-svg-icons'

export default () => (
    <section className="text-center section-3">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4">
                    <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon justify-content-center mb-2 d-flex">
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <h3>Fully Responsive</h3>
                        <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon justify-content-center mb-2 d-flex">
                            <FontAwesomeIcon icon={faUserCheck}/>
                        </div>
                        <h3>Bootstrap 4 Ready</h3>
                        <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div className="features-icons-icon justify-content-center mb-2 d-flex">
                            <FontAwesomeIcon icon={faAward}/>
                        </div>
                        <h3>Easy to Use</h3>
                        <p className="lead mb-0">Ready to use with your own content, or customize the source
                            files!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
