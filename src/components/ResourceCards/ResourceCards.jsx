import React, { useState, useEffect } from 'react';
import '../../style.css';

export default function CrisisHotlines(props) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isFlipped, setIsFlipped] = useState(Array(0).fill(false)); // An empty array of false value. 
  // This is so that we can modify it further

  // fetching the resources and storing it
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/'); // Replace with your API endpoint
      const resourceData = await response.json();
      setData(resourceData);
    };
    fetchData();
  }, []);

  // Filter data based on props.resourceTitle
  useEffect(() => {
    if (data) {
      const filtered = data.filter((resource) => resource.resource === props.resourceTitle);
      setFilteredData(filtered);
      console.log(filteredData);
    }
  }, [data, props.resourceTitle]);

  const toggleCardFlip = (index) => {
    setIsFlipped((prevFlipped) => {
      const updatedFlipped = [...prevFlipped]; // get the array filled with previous values
      updatedFlipped[index] = !prevFlipped[index]; // then just update the required value
      return updatedFlipped;
    });
  };


  return (
    <div className="container">
      <h1 className='text-center impTitles'>Available Resources</h1><br />

      {filteredData.length > 0 &&
        filteredData.map((resource, index) => (
          <div className={`card-container ${isFlipped[index] ? 'flip' : ''}`} onClick={() => toggleCardFlip(index)}>
            <div className="cardR card-front">
              <h3>{resource.title}</h3>
              <img src={resource.imageUrl} alt="Card 1 " style={{ width: '150px', height: '150px' }} />
            </div>

            <div class="cardR card-back card">
            <iframe 
                    class="card-img-top" 
                    style={{ border: "0", height: "70%" }} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429330.50980319054!2d-81.45656346681191!3d32.788424765834066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9588f5f23b565%3A0xa5821f742346b9dc!2sHampton%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1721854534184!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                    frameborder="0">
                </iframe>

              <div class="card-body" style={{ overflow: 'scroll' }}>
                {/* Address */}
                {resource.address !== undefined && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <i className="bi bi-geo-alt-fill" style={{ marginRight: '15px' }}></i>
                    <address>{resource.address}</address>
                  </div>
                )}
                {/* Phone */}
                {resource.phone.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <i className="bi bi-phone" style={{ marginRight: '15px' }}></i>
                    <p>Phone:
                      {Array.isArray(resource.phone)
                        ? resource.phone.map((number) => number + ' ').join('')
                        : resource.phone}
                    </p>
                  </div>
                )}
                {/* Contact Name (if exists) */}
                {resource.contactName.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Contact: {Array.isArray(resource.contactName)
                      ? resource.contactName.map((name) => name + ' ').join('')
                      : resource.contactName}</p>
                  </div>
                )}
                {/* Website (if exists) */}
                {resource.website.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>

                    <p>Website: {Array.isArray(resource.website)
                      ? resource.website.map((name, index) => (<a href={name} target="_blank" rel="noreferrer">
                        Website-{index + 1 + " "}
                      </a>))
                      : resource.website}</p>

                    
                  </div>
                )}
                {/* Email (if exists) */}
                {resource.email.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <i className="bi bi-envelope" style={{ marginRight: '15px' }}></i>
                    <p>Email:  {Array.isArray(resource.email)
                      ? resource.email.map((name, index) => (<p>
                        {name}
                      </p>))
                      : resource.email}</p>

                    

                  </div>
                )}
                {/* Mission (if exists) */}
                {resource.mission !== undefined && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Mission: {resource.mission}</p>
                  </div>
                )}
                {/* Approach (if exists) */}
                {resource.approach !== undefined && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Approach: {resource.approach}</p>
                  </div>
                )}
                {/* Services */}
                {resource.services.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Services: </p>
                    <ul>
                      {resource.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Hours of operation */}
                {resource.hoursOfOperation.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>hoursOfOperation: </p>
                    <ul>
                      {resource.hoursOfOperation.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Location (if exists) */}
                {resource.locations.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Locations:  {Array.isArray(resource.locations)
                      ? resource.locations.map((name, index) => (<p>
                        {name}
                      </p>))
                      : resource.locations}</p>
                  </div>
                )}
                {/* Social Media (if exists) */}
                {resource.socialMedia.length !== 0 && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Social Media:</p>
                    <ul>
                      {resource.socialMedia.map((social) => (
                        <li key={social.platform}>
                          <a href={social.url} target="_blank" rel="noreferrer">
                            {social.platform}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* additionalInfo (if exists) */}
                {resource.additionalInfo !== undefined && (
                  <div className="card-info" style={{ display: 'flex' }}>
                    <p>Additional Info: {resource.additionalInfo}</p>
                  </div>
                )}
              </div>
              
            </div>
          </div>))}
          
    </div>

  );
}

