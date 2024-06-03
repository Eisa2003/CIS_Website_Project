import React, { useState } from 'react'; 
import '../../style.css'; 

export default function Housing() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);


  // Toggle functions for card flipping
  const toggleCardFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const toggleCardFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  return (
    <div className="card-resources">
      {/* Card 1- Family Promise*/}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Family Promise</h5>
          <img src="https://familypromisebeaufortcounty.org/wp-content/uploads/2024/04/GD-2024-Image-1160x773.jpg" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 181 Bluffton Rd Building D101 Bluffton, SC 29910 <br />
            <strong>Phone:</strong> (843) 815-4211<br />
            <strong>Website:</strong> <a href="https://familypromisebeaufortcounty.org/" target="_blank" rel="noopener noreferrer">https://familypromisebeaufortcounty.org/</a><br />
            <strong>Mission: </strong> Family Promise of Beaufort County’s mission is to provide temporary shelter, family stability and permanent housing solutions for homeless 
                                      families with children by mobilizing resources from interfaith and secular communities.    
            <ul>
              <li>Assist individuals in Hampton County</li>
            </ul>
          </p>

        </div>
      </div>

      {/* Card 2 - SafeHaven Homeless Shelter*/}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>SafeHaven Homeless Shelter</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScryo7b3m---kTKL-QPSMhmY5rtMBhmo9-OA&s" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 617 Black Street Walterboro, SC 29488 <br />
            <strong>Phone:</strong> (843)599-9270 <br />
            <strong>Contact:</strong> Candace Edwards, Shelter Supervisor <br />
            <strong>Mission: </strong> Safe Haven provides temporary shelter up to 30 days for 
                                      homeless women, children and families (no single adult males 
                                      or unaccompanied children under the age of 18). 
            <ul>
              <li>For a married couple, a marriage certificate must be shown </li>
              <li>Assist individuals in Hampton County </li>
            </ul>
          </p>
          
        </div>
      </div>
      
      </div>
  );
}

