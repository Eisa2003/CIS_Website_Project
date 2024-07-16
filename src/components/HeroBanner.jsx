import React, { useRef, useState, useEffect } from 'react';
import '../../src/style.css'; // Correcting the import path
import slownature from './images/slownature.mp4';
import fastnature from './images/fastnature.mp4';
import thirdnature from './images/thirdnature.mp4'; // Importing the third video

export default function HeroBanner(props) {
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const video3Ref = useRef(null);
    const [videoIndex, setVideoIndex] = useState(0); // Managing video sequence

    const videos = [video1Ref, video2Ref, video3Ref];

    const handleVideoEnd = () => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length); // Loop through videos
    };

    useEffect(() => {
        videos.forEach((videoRef, index) => {
            if (videoRef.current) {
                if (index === videoIndex) {
                    videoRef.current.classList.add('active');
                    videoRef.current.play();
                } else {
                    videoRef.current.classList.remove('active');
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0; // Reset video to the beginning
                }
            }
        });
    }, [videoIndex, videos]);

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
                    position: 'relative',
                }}
            >
                <video
                    ref={video1Ref}
                    muted
                    onEnded={handleVideoEnd}
                >
                    <source src={slownature} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={video2Ref}
                    muted
                    onEnded={handleVideoEnd}
                >
                    <source src={fastnature} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={video3Ref}
                    muted
                    onEnded={handleVideoEnd}
                >
                    <source src={thirdnature} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="semicircle">
                    <h1 className="typer">{props.title}</h1>
                </div>
            </div>
        </div>
    );
}
