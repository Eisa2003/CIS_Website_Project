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
          <img src="https://www.fbcwinston.org/wp-content/uploads/2016/06/FBC-logo.jpg" 
          style={{ width: '150px', height: '130px' }} />
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr70zkMHaF_i5x114B2vtuYQdo2K5PLaSjvw&s" 
          style={{ width: '150px', height: '150px' }} />
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
          <img src="https://www.lowcountrycaa.org/images/design/main/slogan.png" 
          style={{ width: '150px', height: '100px' }} />
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/102+Ginn+Altman+Ave,+Hampton,+SC+29924/@32.8700268,-81.0978067,17z/data=!3m1!4b1!4m10!1m2!2m1!1s102+Ginn+Altman+Ave.+Hampton,+SC+29924!3m6!1s0x88f95c3e210b3b6f:0x3cc884ec5ed408d1!8m2!3d32.8700268!4d-81.0978067!15sCiYxMDIgR2lubiBBbHRtYW4gQXZlLiBIYW1wdG9uLCBTQyAyOTkyNJIBEGdlb2NvZGVkX2FkZHJlc3PgAQA!16s%2Fg%2F11c872jl48?entry=ttu">102 Ginn Altman Ave. Hampton, SC 29924</a><br />
              <strong>Phone:</strong> (803) 914-0601<br />
              <strong>Website:</strong> <a class="linkweb" href="https://www.lowcountrycaa.org/" target="_blank" rel="noopener noreferrer">www.lowcountrycaa.org</a><br />
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
          <img src="https://static.salvationarmy.org/us-east-1/templates/symphony/static_resources/images/global/shield-en.svg" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/Salvation+Army/@32.4370203,-80.7090305,14z/data=!4m10!1m2!2m1!1s2505+North+St.+Beaufort,+SC+2992!3m6!1s0x88fc0c4f5fe8c443:0x206df2d22006c38!8m2!3d32.4340506!4d-80.6883842!15sCiAyNTA1IE5vcnRoIFN0LiBCZWF1Zm9ydCwgU0MgMjk5MpIBBmNodXJjaOABAA!16s%2Fg%2F1tflbh_6?entry=ttu">2505 North St. Beaufort, SC 2992</a><br />
              <strong>Phone:</strong> (843) 524-3727 <br />
              <strong>Email:</strong> <a href="mailto:BeaufortSC@uss.salvationarmy.org">BeaufortSC@uss.salvationarmy.org</a> <br />
              <strong>Website:</strong> <a class="linkweb" href="https://southernusa.salvationarmy.org/lowcountry/" target="_blank" rel="noopener noreferrer">www.southernusa.salvationarmy.org/lowcountry/</a><br />
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
                  <img src="https://www.211.org/themes/custom/uw211/assets/images/home-logo.svg" 
                  style={{ width: '150px', height: '150px' }} />
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

