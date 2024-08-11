import React from 'react';
import '../../src/style.css';
import newWheat from './images/newWheat.jpg';

export default function HeroBanner(props) {
    return (
        <div className='bannerContainer'>
            <div
                className="heroBanner"
                style={{
                    height: '70vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <img
                    src={newWheat}
                    alt="Flowers"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: '-1', // ensures the image is behind the content
                    }}
                />
                <div className="semicircle">
                    <h1 className="typer">{props.title}</h1>
                </div>
            </div>
        </div>
    );
}