import SingleCollapse from "./SingleCollapse";
import Tool from "./SingleCollapse"

function Tools(props) {

    return(
        <div>
            {props.toolsList.map(tool => (
                <SingleCollapse name = {tool.name} info = {tool.info}/>
            ))}
        </div>
       
    );
}

export default Tools;