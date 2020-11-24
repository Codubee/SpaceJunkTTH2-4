import React from 'react'
import Tools from './Tools/Tools'
import {ToolsInfo} from './Tools/ToolsInfo'


function LandingPage(){
    
    //Turns all of those Tool objects into collapse components using the Tools component
    return(
        <>
            <Tools toolsList = {ToolsInfo}/>
        </>
    )
}

export default LandingPage;