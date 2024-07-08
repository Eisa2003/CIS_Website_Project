import React, { useState, useEffect } from 'react';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // No dependency array implies -> Should only run once after the initial render

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % events.length;
    setCurrentSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? events.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div>Loading events...</div>
      ) : (
        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators" style={{top: '10px'}}>
            {events.map((_, index) => (
              <li
                key={index}
                data-bs-target="#eventCarousel"
                data-bs-slide-to={index}
                className={index === currentSlide ? 'active' : ''}
                style={index === currentSlide ? {backgroundColor: 'black'} : {backgroundColor: 'grey'}}
                onClick={() => handleIndicatorClick(index)}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" style={{ borderRadius: '20px' }}>
            {events.map((event, index) => (
              <div key={event._id} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                <div className="card" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt="Event"
                    style={{ height: '63vh', backgroundSize: 'cover', objectFit: 'contain', backgroundColor: 'grey' }}
                  />
                  <div className="card-body" style={{ backgroundColor: '#38422B', height: 'auto' }}>
                    <strong>
                      <h5 className="card-title text-white" style={{fontWeight: 'bold', fontSize: '25px', textShadow: '2px 2px 4px #000000'}}>{event.title}</h5>
                    </strong>
                    <p className="card-text text-light" style={{fontSize: '15px' }}>{event.date}</p>
                    <p className="card-text text-light" style={{fontSize: '15px' }}>{event.desc}</p>
                    <p className="card-text text-light" style={{fontSize: '15px' }}>{event.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="prev"
            onClick={handlePrev}
            style={{ background: 'transparent', border: 'none', width: 'auto' }}
          >
            <span className="visually-hidden">Previous</span>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="next"
            onClick={handleNext}
            style={{ background: 'transparent', border: 'none', width: 'auto' }}
          >
            <span className="visually-hidden">Next</span>
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsCarousel;
