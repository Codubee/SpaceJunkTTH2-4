import React, { Component } from 'react';
import axios from 'axios';

class RoverPhoto extends Component {

    constructor() {
        super();
        this.state = {
            photoUrl: ''
        };
    }
    
    componentDidMount() {
        axios.get('/mars_photo')
        .then(res => {
            this.setState({
                photoUrl: res.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <img src={this.state.photoUrl} alt="Mars Rover Picture" />
                <h3>This photo of Mars was taken by the Mars Curiosity Rover</h3>
            </div>
        );
    }

}

export default RoverPhoto;