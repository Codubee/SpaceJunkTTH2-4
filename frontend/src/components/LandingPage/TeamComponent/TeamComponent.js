import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardLink, Row, Col,
        CardImg, CardImgOverlay } from 'reactstrap';
import spaceBG from './space.jpg';
import GitHub from './whiteGithub.png'
import './TeamComponentCSS.css'

function TeamComponent() {

    return(
        <div className="mainDiv">
            <div className="teamHeader">
                Meet the Team
            </div>
            
            {/* <Container className="themed-container" fluid="sm"> */}
            <div className="rowSizing">
                <Row>
                    <Col xs="4">
                        <Card className="text-center"inverse>
                            <CardImg src={spaceBG} alt="space"/>
                            <CardImgOverlay>
                                <CardBody>
                                    <CardTitle><h3>Katy Thompson</h3></CardTitle>
                                    <CardText>Senior</CardText>
                                    <CardText>Software Engineering Major</CardText>
                                    <CardLink href="https://github.com/katy-rose" target="_blank">
                                        <img className="gitLink" src={GitHub} alt="Github link"/>
                                    </CardLink>
                                </CardBody>
                            </CardImgOverlay>                        
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card className="text-center" inverse>
                            <CardImg src={spaceBG} alt="space" />
                            <CardImgOverlay>
                                <CardBody>
                                    <CardTitle><h3>Andrew Godipelly</h3></CardTitle>
                                    <CardText>Sophomore</CardText>
                                    <CardText>Double Major in Computer Science and Mathematics</CardText>
                                    <CardLink href="https://github.com/emart870" target="_blank">
                                        <img className="gitLink" src={GitHub} alt="Github link" />
                                    </CardLink>
                                </CardBody>
                            </CardImgOverlay>                        
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card className="text-center" inverse>
                            <CardImg src={spaceBG} alt="space" />
                            <CardImgOverlay>
                                <CardBody>
                                    <CardTitle><h3>Melissa Avila</h3></CardTitle>
                                    <CardText>Junior</CardText>
                                    <CardText>Electrical Engineering Major</CardText>
                                    <CardLink href="https://github.com/MelissaAvila706" target="_blank">
                                        <img className="gitLink" src={GitHub} alt="Github link" />
                                    </CardLink>
                                </CardBody>
                            </CardImgOverlay>                        
                        </Card>
                    </Col>
                </Row>
            {/* </Container> */}
            </div>
            {/* <Container> */}
            <div className="rowSizing">
                <Row>
                    <Col xs={{size: 4, offset: 2}}>
                        <Card className="text-center" inverse>
                            <CardImg src={spaceBG} alt="space" />
                            <CardImgOverlay>
                                <CardBody>
                                    <CardTitle><h3>Exenny Hernandez</h3></CardTitle>
                                    <CardText>Junior</CardText>
                                    <CardText>Computer Science Major</CardText>
                                    <CardLink href="https://github.com/Noviius" target="_blank">
                                        <img className="gitLink" src={GitHub} alt="Github link" />
                                    </CardLink>
                                </CardBody>
                            </CardImgOverlay>                        
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card className="text-center" inverse>
                            <CardImg src={spaceBG} alt="space" />
                            <CardImgOverlay>
                                <CardBody>
                                    <CardTitle><h3>Annika Hendrickson</h3></CardTitle>
                                    <CardText>Sophomore</CardText>
                                    <CardText>Computer Science Major</CardText>
                                    <CardLink href="https://github.com/annikahendrickson" target="_blank">
                                        <img className="gitLink" src={GitHub} alt="Github link" />
                                    </CardLink>
                                </CardBody>
                            </CardImgOverlay>                        
                        </Card>
                    </Col>
                </Row>
            {/* </Container> */}
            </div>
        </div>
    )
}

export default TeamComponent;