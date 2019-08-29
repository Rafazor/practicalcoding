import React from "react"
import Layout from "../components/Layout"
import StartContent from "../components/start/StartContent"

import Loadable from 'react-loadable';

const ParticlesBanner = Loadable({
    loader: () => import('../components/Particles'),
    loading() {
        return null
    }
});

class Index extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Layout>
                <div style={{height: "500px"}}>
                    <ParticlesBanner />
                </div>
                <StartContent/>
            </Layout>
        )
    }


}

export default Index;
