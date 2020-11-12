import React from 'react'
import Tool from './Tools/Tool';
import Tools from './Tools/Tools'

function LandingPage(){
    //Creates various Tool objects that contain names and info about the various tools
    var reactTool = new Tool("react", "is react");
    var enzymeTool = new Tool("enzyme", "is enzyme");
    
    //Turns all of those Tool objects into collapse components using the Tools component
    return(
        <>
            <Tools toolsList = {[reactTool, enzymeTool]}/>
        </>
    )
}

export default LandingPage;