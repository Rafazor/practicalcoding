import React from "react"
import Navigation from "./navigation/Navigation";

import("../style/global/global.scss")

export default ({children}) => (
    <React.Fragment>
        <Navigation/>
        <div className="container">
            {children}
        </div>
    </React.Fragment>
)
