import React from 'react';
import { Row, Col } from 'reactstrap';
import './TeamComponentCSS.css'
import TeamCard from './TeamCard'
import { team } from './TeamMembers'


function TeamComponent() {

    return(
        <div className="mainDiv">
            <div className="teamHeader">
                Meet the Team
            </div>
            
            <div className="rowSizing">
                <Row>
                    <Col xs="4">
                        <TeamCard person={team[0]} />
                    </Col>
                    <Col xs="4">
                        <TeamCard person={team[1]} />
                    </Col>
                    <Col xs="4">
                        <TeamCard person={team[2]} />
                    </Col>
                </Row>
            </div>
            <div className="rowSizing">
                <Row>
                    <Col xs={{size: 4, offset: 2}}>
                        <TeamCard person={team[3]} />
                    </Col>
                    <Col xs="4">
                        <TeamCard person={team[4]} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TeamComponent;