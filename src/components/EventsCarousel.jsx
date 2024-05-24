import React from 'react';

const EventCard = ({ title, date, desc, address, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Event" style={{ height: '65vh', backgroundSize: 'cover', objectFit: 'cover'}}/>
      <div className="card-body" style={{backgroundColor: '#38422B'}}>
        <strong><h5 className="card-title text-white" >{title}</h5></strong>
        <p className="card-text text-light">{date}</p>
        <p className="card-text text-light">{desc}</p>
        <p className="card-text text-light">{address}</p>
      </div>
    </div>
  );
};

const EventsCarousel = ({ events }) => {
  return (
    <div className='container'>
    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {events.map((event, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#eventCarousel"
        data-bs-slide="prev"
        style={{ background: 'transparent', border: 'none', width: 'auto' }}
      >
        <span className="visually-hidden">Previous</span>
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ color: 'black' }} // Adjust icon color as needed
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#eventCarousel"
        data-bs-slide="next"
        style={{ background: 'transparent', border: 'none', width: 'auto' }}
      >
        <span className="visually-hidden">Next</span>
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ color: 'black' }} // Adjust icon color as needed
        ></span>
      </button>
      <ol className="carousel-indicators">
        {events.map((_, index) => (
          <li
            key={index}
            data-bs-target="#eventCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
    </div>
    </div>
  );
};

export default EventsCarousel;
