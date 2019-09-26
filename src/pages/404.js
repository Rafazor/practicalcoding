import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"

export default () => (
    <Layout>
        <div className="container text-center">
            <h1 className="mt-5">404 - Page not found!</h1>
            <h2 className="mt-3">Uh oh.</h2>
            <p className="mt-3">The page you requested could not be found!</p>
            <p><Link to="/">Go on <strong>Home</strong> page!</Link></p>
        </div>
    </Layout>
)
