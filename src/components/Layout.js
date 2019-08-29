import React from "react"
import Navigation from "./navigation/Navigation";

export default ({children}) => (
    <React.Fragment>
        <Navigation/>
        {children}
    </React.Fragment>
)
