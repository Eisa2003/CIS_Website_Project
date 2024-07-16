import React from 'react';
import '../../src/style.css';
import One from './images/one.jpg';
import Two from './images/two.jpg';
import Three from './images/three.jpg';
import Four from './images/four.jpg';
import Five from './images/five.jpg';
import Six from './images/six.jpg';
import Seven from './images/seven.jpg';

export default function Carousel(props) {
  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{ 
        display: 'none',
        textAlign: 'center', 
        color: 'ghostwhite', 
        fontSize: '55px',
        fontFamily: 'Arial, sans-serif',
        position: 'absolute', 
        top: '70%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: 1, // 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with some transparency
        padding: '10px', // Padding for better appearance
        borderRadius: '10px'
      }}>
        {props.title}
      </h1>
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
        <div className="carousel-inner" style={{ height: '70vh', borderRadius: '20px' }}>
          <div className="carousel-item active">
            <img className="d-block w-100" src={One} alt="First slide" style={{ objectFit: 'cover', height: '70vh', width: '100%' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Two} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Three} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Four} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Five} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Six} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Seven} style={{ objectFit: 'cover', height: '70vh', width: '100%' }} alt="Fourth slide" />
          </div>
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
