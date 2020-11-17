import React from 'react'
import Tool from './Tools/Tool';
import Tools from './Tools/Tools'

function LandingPage(){
    //Creates various Tool objects that contain names and info about the various tools
    var reactTool = new Tool("react", "React is a declarative, efficient, and flexible JavaScript library for building user interfaces\nUses a virtual DOM and does a diff of the real DOM to only rebuild the parts that need to be rebuilt\nIt lets you compose complex UIs from small and isolated pieces of code called “components”\nReact can be added to most existing HTML pages with no complicated tools or install requirements");
    var enzymeTool = new Tool("enzyme", "Enzyme is a library that makes testing React components specifically easier\nIt was created to solve the problems with Jest snapshots\nEnzyme renders components in memory, then provides a series of APIs to examine the component’s properties");
    
    //Turns all of those Tool objects into collapse components using the Tools component
    return(
        <>
            <Tools toolsList = {[reactTool, enzymeTool, exampleTool]}/>
        </>
    )
}

export default LandingPage;