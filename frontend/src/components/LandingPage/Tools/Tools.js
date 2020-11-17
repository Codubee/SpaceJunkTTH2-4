import SingleCollapse from "./SingleCollapse";
import Tool from "./SingleCollapse"

//Creates multiple collapse components
//The name and text body for each component is passed in through an array in props
function Tools(props) {

    return(
        <div class = "container">
            {/*Takes each Tool object in the array and creates a single collapse component*/}
                {props.toolsList.map(tool => (
                    <SingleCollapse name = {tool.name} info = {tool.info}/>  
                ))}
        </div>
       
    );
}

export default Tools;