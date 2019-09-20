import React from "react"

import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://yahoo.us20.list-manage.com/subscribe/post?u=887374e8a9bc4d8511398f08f&amp;id=aec74ab1ed";

const SimpleForm = () => <MailchimpSubscribe url={url}/>

export default () => (
    <section className="home-newsletter section-4">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="single">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>We promise we will not spam you!</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email"/>
                            <span className="input-group-btn">
         <button className="btn btn-theme" type="submit">Subscribe</button>
         </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
