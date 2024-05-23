import React from 'react';
import HamptonLakeImage from './images/HamptonLake.jpeg';
import HamptonWildImage from './images/HamptonWild.jpeg';
import HamptonMainImage from './images/HamptonMain.jpeg';

export default function Carousel(props) {
  return (
    <div style={{ position: 'relative'}}>
      <h1 style={{ 
        textAlign: 'center', 
        color: 'white', 
        fontSize: '50px', 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        textShadow: '12px 8px 15px black',
        zIndex: '1' 
      }}>
        {props.title}
      </h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: '60vh'}}>
          <div className="carousel-item active">
            <img className="d-block w-100" src={HamptonLakeImage} alt="First slide" style={{ objectFit: 'cover', height: '60vh', width: '100%' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={HamptonWildImage} style={{ objectFit: 'cover', height: '60vh', width: '100%' }} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={HamptonMainImage} style={{ objectFit: 'cover', height: '60vh', width: '100%' }} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black'}}>Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black'}}>Next</span>
        </a>
      </div>
    </div>
  );
}
