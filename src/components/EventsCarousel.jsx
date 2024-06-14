import React, { useState, useEffect } from 'react';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5001/api/events/');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <ol className="carousel-indicators">
            {events.map((_, index) => (
              <li
                key={index}
                data-bs-target="#eventCarousel"
                data-bs-slide-to={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => handleIndicatorClick(index)}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {events.map((event, index) => (
              <div key={event._id} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                <div className="card" style={{ borderRight: '5px', borderLeft: '5px' }}>
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt="Event"
                    style={{ height: '63vh', backgroundSize: 'cover', objectFit: 'cover' }}
                  />
                  <div className="card-body" style={{ backgroundColor: '#38422B', height: 'auto' }}>
                    <strong>
                      <h5 className="card-title text-white">{event.title}</h5>
                    </strong>
                    <p className="card-text text-light">{event.date}</p>
                    <p className="card-text text-light">{event.desc}</p>
                    <p className="card-text text-light">{event.address}</p>
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
