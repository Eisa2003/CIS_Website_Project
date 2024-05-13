import React, { useState } from 'react';
import HamptonLakeImage from './HamptonLake.jpeg';
import HamptonWildImage from './HamptonWild.jpeg';
import HamptonMainImage from './HamptonMain.jpeg';

export default function Carousel() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div style={{ position: 'relative', height: '50vh' }}>
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
        Hampton County Resources
      </h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: '60vh', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={HamptonLakeImage} alt="First slide" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
          </div>
          <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={HamptonWildImage} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="Second slide" />
          </div>
          <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={HamptonMainImage} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black'}}>Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only" style={{ color: 'black'}}>Next</span>
        </a>
      </div>
    </div>
  );
}
