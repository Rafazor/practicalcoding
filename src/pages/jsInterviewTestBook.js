import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"

export default () => (
    <Layout>
        <div className="container">
            <Link to="/">Home</Link>
            <div>Salut de pe book!</div>
        </div>
    </Layout>
)
