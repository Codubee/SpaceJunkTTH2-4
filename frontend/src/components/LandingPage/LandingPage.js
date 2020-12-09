import React from 'react'
import Tools from './Tools/Tools'
import {ToolsInfo} from './Tools/ToolsInfo'
import Explanation from './Explanation/Explanation'
import TeamComponent from './TeamComponent/TeamComponent'

function LandingPage(){
    
    //Turns all of those Tool objects into collapse components using the Tools component
    return(
        <div>
            <Explanation/>
            <Tools toolsList = {ToolsInfo}/>
            <TeamComponent />
        </div>
    )
}

export default LandingPage;