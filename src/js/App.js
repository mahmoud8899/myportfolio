import React, { Fragment } from "react"
import TheNavbar from "./Pages/NavBar/index"
import './css/index.css'
import 'react-slideshow-image/dist/styles.css'
import Home from "./Pages/Home"


const App = () => {



    return (<Fragment>
        <TheNavbar />
        <Home />
    </Fragment>


    )
}


export default App