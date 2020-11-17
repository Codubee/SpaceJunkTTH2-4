import React from 'react';
import {Jumbotron} from 'reactstrap';
import './Explanation.css';

function Explanation() {

    return (
      
    <Jumbotron className='Jumbo1' style={{"background-color": "rgb(28, 16, 38)", "background-image": ""}}>
    <h1 className='title'>SPACE JUNK</h1>
    <div className="parag">
    <p id="desc">The sky's the limit with Space Junk, a web application designed to recommend you songs based on NASA's picture of the day along with some cool space facts.</p>
    </div>
    </Jumbotron>
   

    );


}

export default Explanation;
