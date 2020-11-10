import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardLink, 
        CardImg, CardImgOverlay } from 'reactstrap';
import spaceBG from './space.jpg';
import GitHub from './whiteGithub.png'
import './TeamComponentCSS.css'

function TeamCard(props) {

    return (
        <Card className="text-center" inverse>
            <CardImg src={spaceBG} alt="space"/>
            <CardImgOverlay>
                <CardBody>
                    <CardTitle><h3>{props.person.name}</h3></CardTitle>
                    <CardText>{props.person.class}</CardText>
                    <CardText>{props.person.major}</CardText>
                    <CardLink href={props.person.github} target="_blank">
                        <img className="gitLink" src={GitHub} alt="Github link"/>
                    </CardLink>
                </CardBody>
            </CardImgOverlay>                        
        </Card>
    );
}

export default TeamCard;