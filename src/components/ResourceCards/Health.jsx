import React, { useState } from 'react'; 
import '../../style.css'; 

export default function Health() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);


  // Toggle functions for card flipping
  const toggleCardFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const toggleCardFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const toggleCardFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const toggleCardFlip4 = () => {
    setIsFlipped4(!isFlipped4);
  };

  return (
    <div className="card-resources">
      {/* Card 1- Department of Health and Environmental Control */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Department of Health and Environmental Control</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 531 Carolina Avenue West Varnville, SC 29944<br />
            <strong>Phone:</strong> (803) 943-3878<br />
            <strong>Contact:</strong> Shandell Smalls, Health Educator II<br />
            <strong>Email:</strong> <a href="mailto:smallssa@dhec.sc.gov">smallssa@dhec.sc.gov</a> <br />
            <strong>Services: </strong> 
            <ul>
              <li>Birth Control</li>
              <li>Pregnancy Services</li>
              <li>Women’s/Men’s Health</li>
              <li>STD Testing, Treatment, Vaccines</li>
              <li>Cancer Screenings and Prevention</li>
              <li>HIV Testing and Screening</li> 
            </ul>
          </p>
        </div>
      </div>

      {/* Card 2 - Needy Meds */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Needy Meds</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Website:</strong> <a href="https://www.needymeds.org/" target="_blank" rel="noopener noreferrer">https://www.needymeds.org/</a><br />
            <strong>Services: </strong>   
            <ul>
              <li>Patient assistance programs for free or reduced medications </li>
              <li>Discount Card </li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3 - Welvista */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>Welvista</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Website:</strong> <a href="https://www.welvista.org/about/" target="_blank" rel="noopener noreferrer">https://www.welvista.org/about/</a><br />
            <strong>Mission Statement: </strong> <br />Welvista is a 501(c)3 nonprofit organization that helps uninsured and underserved South Carolinians gain access 
                                                 to essential health services while reducing the long-term costs of health care that result from untreated conditions. 
                                                 Prescription assistance for free medications for uninsured.
          </p>
          
        </div>
      </div>

      {/* Card 4 - TT&T Services */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>TT&T Services</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Contact:</strong> Ms. Dominic Rivers, Case Manager<br />
            <strong>Phone:</strong> (443) 583-8873<br />
            <strong>Services offered: </strong><br />
            <ul>
              <li>Rides to appointments</li>
              <li>School uniforms</li>
              <li>Rental assistance</li>
              <li>Utility assistance</li>
              <li>Finding employment</li>
              <li>Hygiene products</li>
              <li>Diaper assistance</li>
              <li>Counseling</li>
              <li>Assessments</li>
              <li>Grief counseling</li>
              <li>Weight loss management</li>
              <li>Primary care</li>
              <li>Adolescent care</li>
              <li>Geriatrics care</li>
              <li>Pediatrics care</li>
            </ul> 
          </p>

        </div>
      </div>


    </div>
  );
}
