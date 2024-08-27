import React from 'react';
import '../../src/style.css';
import One from './images/one.jpg';
import Two from './images/two.jpg';
import Three from './images/three.jpg';
import Four from './images/four.jpg';
import Five from './images/five.jpg';
import Six from './images/six.jpg';
import Seven from './images/seven.jpg';

export default function Carousel() {
  const captions = [
    "Downtown Estill, SC",
    "Palmetto Theater, Lee Avenue, Hampton",
    "Yamasse Amtrak Station",
    "Main Street, Varnville, SC - Building used as the Barbershop in Forrest Gump",
    "Lake Warren State Park",
    "Fountain at the Hampton County Courthouse",
    "The Clock, Lee Avenue, Hampton, SC"
  ];

  return (
    <div style={{ position: 'relative' }} className='container'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div className="carousel-inner" style={{ height: '75vh', maxHeight: '600px', borderRadius: '20px' }}>
          {[One, Two, Three, Four, Five, Six, Seven].map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', height: '75vh', width: '100%' }} />
              <div className="carousel-caption d-md-block" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '10px 20px',
                borderRadius: '10px',
                fontSize: '1.2rem',
                fontFamily: 'Georgia, serif',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                maxWidth: '80%',
                margin: '0 auto',
                bottom: '80px', // Position the caption towards the bottom
              }}>
                <h5 style={{ color: 'white', fontSize: '1rem', textAlign: 'center'}}>{captions[index]}</h5>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black' }}>Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black' }}>Next</span>
        </a>
      </div>
    </div>
  );
}
