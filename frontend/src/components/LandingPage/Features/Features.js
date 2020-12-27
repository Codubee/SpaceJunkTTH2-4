import React from 'react';
import { Media} from 'reactstrap';
import './Features.css'

const spacePic = '/spacepic.jpg';
const musicPic = '/musicpic.jpg';
const newsPic = '/newspic.jpg';
const weatherPic = '/weatherpic.jpg';
const factPic = '/factpic.jpg';

function Features() {
    return (
        <div className='main'>
            <h1 className='title'>Features</h1>

            <div className='inRow'>
                <Media className='mediaStyle'>
                    <Media left href="#">
                        <Media className='picStyle' object src={spacePic} alt="space picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Picture of the day</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with a new, space-related picture every day.</div>
                    </Media>
                </Media>

                <Media className='mediaStyle'>
                    <Media left href="#">
                        <Media className='picStyle' object src={musicPic} alt="music picture example" />
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

                <Media className='mediaStyle'>
                    <Media left href="#">
                        <Media className='picStyle' object src={newsPic} alt="space picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>News</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with news related to space.</div>
                    </Media>
                </Media>

                <Media className='mediaStyle'>
                    <Media left href="#">
                        <Media className='picStyle' object src={weatherPic} alt="music picture example" />
                    </Media>
                    <Media body>
                        <Media heading>
                            <h2 className='featureTitleText'>Weather</h2>
                        </Media>
                        <div className='mainText'>This feature provides users with the weather in space and on other planets.</div>
                    </Media>
                </Media>

                <Media className='mediaStyle'>
                    <Media left href="#">
                        <Media className='picStyle' object src={factPic} alt="space picture example" />
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