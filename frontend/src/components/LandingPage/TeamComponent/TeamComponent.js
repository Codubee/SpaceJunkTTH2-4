import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardLink, Row, Col,
        CardDeck, CardImg, CardImgOverlay } from 'reactstrap';
import GithubLink from './GitHub-Mark-32px.png';
import spaceBG from './space.jpg';

function TeamComponent() {

    return(
        <div>
            <Row>
                <Col sm="3">
                    <Card className="text-center" inverse>
                        <CardImg src={spaceBG} alt="space" />
                        <CardImgOverlay>
                            <CardBody>
                                <CardTitle><h3>Katy Thompson</h3></CardTitle>
                                <CardText>Senior</CardText>
                                <CardText>Software Engineering Major</CardText>
                                <CardLink href="https://github.com/katy-rose" target="_blank">
                                    Github
                                </CardLink>
                            </CardBody>
                        </CardImgOverlay>                        
                    </Card>
                </Col>
            </Row>
            <CardDeck>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle><h3>Katy Thompson</h3></CardTitle>
                        <CardText>Senior</CardText>
                        <CardText>Software Engineering Major</CardText>
                        <CardLink href="https://github.com/katy-rose" target="_blank">
                            <img src={GithubLink} alt="Github Link"/>
                        </CardLink>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle><h3>Andrew Godipelly</h3></CardTitle>
                        <CardText>Sophomore</CardText>
                        <CardText>Double Major in Computer Science and Mathematics</CardText>
                        <CardLink href="https://github.com/emart870" target="_blank">
                            <img src={GithubLink} alt="Github Link"/>
                        </CardLink>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle><h3>Melissa Avila</h3></CardTitle>
                        <CardText>Junior</CardText>
                        <CardText>Electrical Engineering Major</CardText>
                        <CardLink href="https://github.com/MelissaAvila706" target="_blank">
                            <img src={GithubLink} alt="Github Link"/>
                        </CardLink>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle><h3>Annika Hendrickson</h3></CardTitle>
                        <CardText>Junior</CardText>
                        <CardText>Electrical Engineering Major</CardText>
                        <CardLink href="https://github.com/MelissaAvila706" target="_blank">
                            <img src={GithubLink} alt="Github Link"/>
                        </CardLink>
                    </CardBody>
                </Card>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle><h3>Exenny Hernandez</h3></CardTitle>
                        <CardText>Junior</CardText>
                        <CardText>Electrical Engineering Major</CardText>
                        <CardLink href="https://github.com/MelissaAvila706" target="_blank">
                            <img src={GithubLink} alt="Github Link"/>
                        </CardLink>
                    </CardBody>
                </Card>
            </CardDeck>
            
        </div>
    )
}

export default TeamComponent;