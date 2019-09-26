import React from "react"
import Layout from "../components/Layout"
import StartContent from "../components/start/StartContent"
import {Helmet} from "react-helmet";


class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Online Coding Books</title>
                    <meta name="description" content="HTML5, CSS3, JavaScript,
ECMAScript and Algorithms"/>
                    <link rel="canonical" href="https://onlinecodingbooks.com/" />
                    <meta name="google-site-verification" content="6cnnzMfAqov9B9Tvj9iqKPcXGbAklNilQsFWBu-3IcU" />
                </Helmet>
                <StartContent/>
            </Layout>
        )
    }
}

export default Index;
