import React from 'react'
import Tools from './Tools/Tools'
import {ToolsInfo} from './Tools/ToolsInfo'
import Explanation from './Explanation/Explanation'
import TeamComponent from './TeamComponent/TeamComponent'
import Features from './Features/Features'

function LandingPage(){
    
    //Turns all of those Tool objects into collapse components using the Tools component
    return(
        <div>
            <Explanation/>
            <Features/>
            <Tools toolsList = {ToolsInfo}/>
            <TeamComponent />
        </div>
    )
}

export default LandingPage;