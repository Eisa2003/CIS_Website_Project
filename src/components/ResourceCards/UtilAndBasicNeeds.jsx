import React, { useState } from 'react'; 
import '../../style.css'; 

export default function UtilAndBasicNeeds() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);


  // Toggle functions for card flipping
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
  
    const toggleCardFlip5 = () => {
      setIsFlipped5(!isFlipped5);
    };

  return (
    <div className="card-resources">

      {/* Card 1- First Baptist Church*/}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>First Baptist Church</h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Clothes Closet Program</strong> <br />
              <strong>Phone: </strong> (803) 943-3758 <br />        
            </p>

        </div>
      </div>

      {/* Card 2 - Lawtonville Baptist Church */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Lawtonville Baptist Church</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Clothes Closet Program </strong><br />
            <strong>Phone:</strong> (803) 625-2871 <br />
            <ul>
              <li>By appointment</li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3- Lowcountry Community Action Agency */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>Lowcountry Community Action Agency </h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address: </strong>102 Ginn Altman Ave. Hampton, SC 29924 <br />
              <strong>Phone:</strong> (803) 914-0601<br />
              <strong>Website:</strong> <a href="https://www.lowcountrycaa.org/" target="_blank" rel="noopener noreferrer">https://www.lowcountrycaa.org/</a><br />
              <strong>Services: </strong>
              <ul>
                <li>Utility bill payment assistance</li>
                <li>Energy Crisis Assistance </li>
                <li>Weatherization and energy-related home repairs </li>
              </ul>        
            </p>

        </div>
      </div>

      {/* Card 4- Salvation Army of the Lowcountry*/}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>Salvation Army of the Lowcountry (Assists Hampton County residents)</h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address: </strong> 2505 North St. Beaufort, SC 2992 <br />
              <strong>Phone:</strong> (843)524-3727 <br />
              <strong>Email:</strong> <a href="mailto:BeaufortSC@uss.salvationarmy.org">BeaufortSC@uss.salvationarmy.org</a> <br />
              <strong>Website:</strong> <a href="https://southernusa.salvationarmy.org/lowcountry/" target="_blank" rel="noopener noreferrer">https://southernusa.salvationarmy.org/lowcountry/</a><br />
              <strong>Services: </strong>
              <ul>
                <li>Food Pantry </li>
                <li>Rent & Utilities Emergency Assistance</li>
                <li>Christmas Assistance </li>
                <li>Disaster Responses  </li>
              </ul>        
            </p>

        </div>
      </div>

        {/* Card 5- Sc211.org or dial 211*/}
        <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
                <div className="cardR card-front">
                  <h5>FSc211.org or dial 211 </h5>
                </div>
                <div className="cardR card-back">
                    <p>
                      <strong>Mission: </strong><br />
                      <br />2‑1‑1 is a free telephone number providing access to local community services. <br />
                      <br />2‑1‑1 is available in multiple languages, allowing those in need to access information and obtain referrals 
                                                 to physical and mental health resources; housing, utility, food, and employment assistance; and suicide and crisis interventions. <br />        
                    </p>

                </div>
              </div>
              
    
      
      </div>
  );
}

