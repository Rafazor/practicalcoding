import React from "react"
import ParticleAnimation from 'react-particle-animation'

export default () => (
    <div className="overlay">
        <ParticleAnimation numParticles={400} style={{height: "500px"}}/>
        <div className="header-banner">
            <div className="img-wrapper">
                <div>
                    <img src={'expand.png'} alt="header logo coding"/>
                </div>

            </div>
            <div>
                <div>
                    ENHANCE YOUR KNOWLEDGE!
                </div>

                <button type="button" className="btn btn-danger">GET THE BOOK TODAY</button>
            </div>
        </div>
    </div>
)
