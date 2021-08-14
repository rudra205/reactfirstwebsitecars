import React from 'react';
import { Button } from './Button';
import './Herosection.css';

function Herosection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>what are u waiting for</p>
            <div className="hero-btn">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED

                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH <i class="far fa-play-circle"></i>

                </Button>
            </div>
            
        </div>
    )
}

export default Herosection
