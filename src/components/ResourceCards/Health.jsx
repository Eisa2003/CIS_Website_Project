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
          <img src="https://lh3.googleusercontent.com/p/AF1QipP1KFURa21M2Hzlx7fdjTSbeqLIqrHntEOoXgq7=s1360-w1360-h1020" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/531+W+Carolina+Ave,+Varnville,+SC+29944/@32.854687,-81.0878,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c1cc269fa01:0x79881b9e39b77396!8m2!3d32.854687!4d-81.0878!16s%2Fg%2F11dzpkdgrb?entry=ttu">531 Carolina Avenue West Varnville, SC 29944</a><br />
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
          <img src="https://www.needymeds.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Flogo.eb919830505a8cb24ad4c2d0d8c56cee.png&w=128&q=75" alt="Card 1 Image" style={{ width: '150px', height: '100px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Website:</strong> <a class="linkweb" href="https://www.needymeds.org/" target="_blank" rel="noopener noreferrer">www.needymeds.org</a><br />
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
          <img src="data:image/jpeg;base64,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" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Website:</strong> <a class="linkweb" href="https://www.welvista.org/about/" target="_blank" rel="noopener noreferrer">www.welvista.org/about</a><br />
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
          <img src="https://media.istockphoto.com/id/519749080/photo/help-support-advice-guidance-signpost.jpg?s=612x612&w=0&k=20&c=hXetfeUaFCs0vet3Jxl3iTwtUGv-mtsN-9KiFzfxlMI=" 
          style={{ width: '150px', height: '150px' }} />
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
