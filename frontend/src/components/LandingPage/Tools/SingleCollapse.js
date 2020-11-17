import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import "./SingleCollapse.css"
//creates a single collapse component 
//The name and text body of the component are passed in through props
function SingleCollapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return(
    <div className = "spaceBackground1">
        <Button className="spaceColorButton1" onClick={toggle} style={{ marginBottom: 10 }}>
            {props.name}
        </Button>
        <Collapse isOpen={isOpen}>
            <Card className = "spaceBackground2">
                <CardBody>
                    {props.info.split("\n").map(phrase => (
                        <p className="creamText">
                            {phrase}
                        </p>  
                    ))}

                </CardBody>
            </Card>
    </Collapse>
    </div>
    )
}

export default SingleCollapse;