import background from './images/background.jpg';

import React from 'react'

export default function HeroBanner() {
    return (
        <div>
            <div style={{ height: '70vh', width: '100%' }}>
                <img src={background} className="img-fluid" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    )
} // end function HeroBanner
