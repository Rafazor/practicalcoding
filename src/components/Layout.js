import React from "react"
import Navigation from "./navigation/Navigation";

import("../style/global/global.scss")

export default ({children}) => (
    <React.Fragment>
        <Navigation/>
        {children}
    </React.Fragment>
)
