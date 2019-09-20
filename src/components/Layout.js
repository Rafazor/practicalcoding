import React from "react"
import Navigation from "./navigation/Navigation";
import Footer from "./navigation/Footer";
import CookieConsent from "react-cookie-consent";

import("../style/global/global.scss")

export default ({children}) => (
    <>
        <div className="content">
            <CookieConsent
                location="bottom"
                buttonText="I accept!"
                cookieName="cookiePolicy"
                style={{background: "#2B373B"}}
                buttonStyle={{color: "#4e503b", fontSize: "13px"}}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
            <Navigation/>
            {children}
        </div>
        <Footer/>
    </>
)
