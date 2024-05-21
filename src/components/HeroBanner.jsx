import '../../src/style.css'

import React from 'react';
import background from './images/background.jpg';

export default function HeroBanner() {
    return (
        <div>
            <div
                className="heroBanner"
                style={{
                    height: '70vh',
                    width: '100%',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <div className="semicircle">
                    <h1 className="typer">Let's try putting a lot of stuff into this div and see how much can it hold</h1>
                </div>
            </div>
        </div>
    );
}
