import React from 'react';
import { Media, Button } from 'reactstrap';
import { Text } from 'react';
import './Features.css'
import spacePic from './spacepic.jpg';
import musicPic from './musicpic.jpg';
import newsPic from './newspic.jpg';
import weatherPic from './weatherpic.jpg';
import factPic from './factpic.jpg';

var picStyle = {
    maxWidth: "128px",
    maxHeight: "128px",
    minHeight: "128px",
    marginRight: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
};

var mediaStyle = {
    flex: 1,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#7a748c",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 10,
};

function Features() {
    return (
        <div className='main'>
            <h1 className='title'>Features</h1>

            <div className='inRow'>

                <Media style={mediaStyle}>
                    <Media left href="#">
                        <Media style={picStyle} object src={spacePic} alt="space picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Picture of the day</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with a new, space-related picture every day.</div>
                    </Media>
                </Media>

                <Media style={mediaStyle}>
                    <Media left href="#">
                        <Media style={picStyle} object src={musicPic} alt="music picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Music of the day</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with music to accompany the picture of the day.</div>
                    </Media>
                </Media>

            </div>

            <div className='inRow'>

                <Media style={mediaStyle}>
                    <Media left href="#">
                        <Media style={picStyle} object src={newsPic} alt="space picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>News</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with news related to space.</div>
                    </Media>
                </Media>

                <Media style={mediaStyle}>
                    <Media left href="#">
                        <Media style={picStyle} object src={weatherPic} alt="music picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Weather</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with the weather in space and on other planets.</div>
                    </Media>
                </Media>

                <Media style={mediaStyle}>
                    <Media left href="#">
                        <Media style={picStyle} object src={factPic} alt="space picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Other Space Related Facts</h2>
                        </Media>
                        <div className='mainText'>This feature displays other fun space related facts.</div>
                    </Media>
                </Media>
            </div>
        </div>
    );
}

export default Features;