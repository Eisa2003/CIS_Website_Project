import React from 'react';
import '../../src/style.css'; // Correcting the import path
import slownature from './images/slownature.mp4';

export default function HeroBanner() {
    return (
        <div>
            <div
                className="heroBanner"
                style={{
                    height: '70vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <video 
                    autoPlay 
                    loop 
                    muted 
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        zIndex: '-1' // Ensures the video is behind the content
                    }}
                >
                    <source src={slownature} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="semicircle">
                    <h1 className="typer">Welcome</h1>
                </div>
            </div>
        </div>
    );
}
