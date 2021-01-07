import React, { Component } from 'react';
import axios from 'axios';

class PicOfDay extends Component {
    constructor() {
        super();
        this.state = {
            urlUrl: ''
        };
    }
    componentDidMount() {
        axios.get('/picOfTheDay')
            .then(res => {
                console.log(res.data)
                this.setState({
                    urlUrl: res.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <img src={this.state.urlUrl} alt="url" />
            </div>
        );
    }
}
export default PicOfDay;

