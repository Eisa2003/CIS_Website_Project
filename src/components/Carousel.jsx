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
    "Downtown Estill",
    "Palmetto Theater, Lee Avenue",
    "Yamasse Amtrak Station",
    "Main Street, Varnville, SC - Building used as the Barbershop in Forrest Gump",
    "Lake Warren State Park",
    "Fountain at the Hampton County Courthouse",
    "The Clock, Lee Avenue"
  ];

  return (
    <div style={{ position: 'relative', height: '80vh', border: 'solid', maxHeight: '800px', borderRadius: '20px',  padding:'0', overflow: 'hidden' }} className='container'> {/* The parent div for all the containing styles */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ height: '80vh',  maxHeight: '800px'}}> {/* this div is div of it's own and it contains literally every important div. Kind of stupid but if it works then it works boi */}
        <ol className="carousel-indicators" style={{ bottom: '5%'}}>
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        {/*style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}*/}
        <div className="carousel-inner">
          {[One, Two, Three, Four, Five, Six, Seven].map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}> {/* Moved this div above so as to have a relative positioning*/}
               <div className="" style={{
                marginInline: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                padding: '10px 20px',
                fontSize: '1.2rem',
                fontFamily: 'Georgia, serif',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                width: '100%',
                zIndex: '1'
              }}>
                <h5 style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center'}}>{captions[index]}</h5>
              </div>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', height: '80vh', width: '100%' }} /> {/* Fixed the height the same as the two parent/grandparent's height */}
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
