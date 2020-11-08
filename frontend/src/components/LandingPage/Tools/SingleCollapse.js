import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function SingleCollapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return(
    <div>
        <Button onClick={toggle} style={{ marginBottom: 10 }}>
            {props.name}
        </Button>
        <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                    <p className="text-primary">
                        {props.info}
                    </p>
                </CardBody>
            </Card>
      </Collapse>
    </div>
    )
}

export default SingleCollapse;