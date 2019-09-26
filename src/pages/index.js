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
                    <meta name="description"
                          content="Enhance Your Knowledge! We selected all the top interview topics that are relevant in 2019 and 2020 for a JavaScript and Front End developer. Test your technical interview skills with our programming questions and algorithms!"/>
                    <link rel="canonical" href="https://onlinecodingbooks.com/"/>
                    <meta name="google-site-verification" content="6cnnzMfAqov9B9Tvj9iqKPcXGbAklNilQsFWBu-3IcU"/>
                    <meta name="msvalidate.01" content="3DFC34FFFA6A9D0C795E0E2F28E85C6A"/>
                </Helmet>
                <StartContent/>
            </Layout>
        )
    }
}

export default Index;
