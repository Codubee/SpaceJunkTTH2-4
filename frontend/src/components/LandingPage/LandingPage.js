import React from 'react'
import Tool from './Tools/Tool';
import Tools from './Tools/Tools'

function LandingPage(){

    var reactTool = new Tool("react", "is react");
    return(
        <>
            <Tools toolsList = {[reactTool]}/>
        </>
    )
}

export default LandingPage;