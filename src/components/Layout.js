import React from "react"
import Navigation from "./navigation/Navigation";

import("../style/global/global.scss")

export default ({children}) => (
    <>
        <Navigation/>
        {children}
    </>
)
