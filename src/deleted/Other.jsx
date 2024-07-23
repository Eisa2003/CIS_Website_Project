import React, { useState } from 'react'; 
import '../../style.css'; 

export default function Other() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);


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
  

  return (
    <div className="card-resources">

      {/* Card 1- GSHG Troop #30089 */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h3>GSHG Troop #30089 </h3>
          <img alt ="" src="https://www.girlscoutsesc.org/content/dam/girlscouts-shared-redesign/images/2021-logos-original/girlscoutsesc-green.png" 
          style={{ width: '225px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/2948+State+Rd+S-25-51,+Varnville,+SC+29944/@32.796273,-81.1049995,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95f1a77c56479:0x1369bb1299a28547!8m2!3d32.796273!4d-81.1049995!16s%2Fg%2F11pf8ndg91?entry=ttu">2948 Rock Springs Rd Varnville, SC 29944</a><br />
              <strong>Phone: </strong> <a href="tel:+8038425338">(803) 842 5338 Text</a>  <br />  
              <strong>Email:</strong> <a href="mailto:adlong45@yahoo.com">adlong45@yahoo.com </a> <br /> 
              <strong>Website:</strong> <a class="linkweb" href="https://www.gshg.org/" target="_blank" rel="noopener noreferrer">www.gshg.org</a><br /> 
              <ul>
                <li>GS Troop meets every Thursday at 6pm at the Hampton United Methodist Church Annex Building. </li>
              </ul>    
            </p>

        </div>
      </div>

      {/* Card 2 - Clemson Extension */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h3>Clemson Extension </h3>
          <img alt ="" src="data:image/png;base64,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" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/12+Walnut+St.+E+Hampton,+SC+29924/@32.8649264,-81.110006,3a,75y,215.35h,90t/data=!3m4!1e1!3m2!1s_j27lWjuA-ztzzzN_1XMXg!2e0!4m2!3m1!1s0x88f95c303c2ef34f:0x2758c7755593875?sa=X&ved=1t:3780&ictx=111">12 Walnut St. E Hampton, SC 29924</a><br />
              <strong>Phone: </strong> <a href="tel:+8039433427">(803) 943-3427</a>  <br />  
              <strong>Contact: </strong> Jackie Gallagher, Rural Health and Nutrition Associate  <br /> 
              <strong>Email:</strong> <a href="mailto:adlong45@yahoo.com">adlong45@yahoo.com </a> <br /> 
              <strong>Website:</strong> <a class="linkweb" href="https://www.clemson.edu/extension/co/hampton.html" target="_blank" rel="noopener noreferrer">www.clemson.edu/extension/co/hampton</a><br /> 
              <strong>Services: </strong>
              <ul>
                <li>Agribusiness</li>
                <li>Agronomy</li>
                <li>Food safety</li>
                <li>Nutrition</li>
                <li>Horticulture</li>
                <li>Livestock and forages</li>
                <li>Forestry and wildlife resources</li>
                <li>Rural health</li>
                <li>Water resources</li>
                <li>4-H and youth development</li>
              </ul>
    
            </p>
          
        </div>
      </div>

      {/* Card 3- South Carolina State Extension */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h3>South Carolina State Extension </h3>
          <img alt ="" src="data:image/png;base64,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" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Phone: </strong> <a href="tel:+8039421394">(803) 942-1394</a> <br />  
              <strong>Contact: </strong> Myles Farmer, Ethnic Program Assistant and Expanded Food Educator  <br /> 
              <strong>Email:</strong> <a href="mailto:mfarmer3@scsu.edu">mfarmer3@scsu.edu</a> <br /> 
              <strong>Services: </strong>
              <ul>
                <li>Agribusiness</li>
                <li>Agronomy</li>
                <li>Food safety</li>
                <li>Nutrition</li>
                <li>Horticulture</li>
                <li>Livestock and forages</li>
                <li>Forestry and wildlife resources</li>
                <li>Rural health</li>
                <li>Water resources</li>
                <li>4-H and youth development</li>
              </ul>

            </p>

        </div>
      </div>

      {/* Card 4- CJ Filling Station */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h3>CJ Filling Station </h3>
          <img alt ="" src="https://static.wixstatic.com/media/02c894_ece4477ee46a49b2b6dea17fd5284c5a~mv2.jpeg/v1/fill/w_163,h_189,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CJ%20logo.jpeg" 
          style={{ width: '200px', height: '200px' }} />
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/43+E+Palmetto+Ave,+Varnville,+SC+29944/@32.8501901,-81.079488,17z/data=!3m1!4b1!4m5!3m4!1s0x88f95eaa0a512e39:0xca1328d6240e8429!8m2!3d32.8501901!4d-81.079488?entry=ttu">43 East Palmetto Ave. Varnville, SC 29944</a><br />
              <strong>Phone: </strong> <a href="tel:+8038423313">(803) 842-3313</a><br />  
              <strong>Contact: </strong> Cynthia Johnson, Executive Director <br /> 
              <strong>Email:</strong> <a href="mailto:cjfillingstation43@gmail.com">cjfillingstation43@gmail.com</a> <br /> 
              <strong>Mission: </strong>To provide the resources and support needed to replenish, refresh, and refuel our community. 
                                        Serving is not measured by what you do but by the heart and intent of why you do it. 
            </p>

        </div>
      </div>
              
    
      
      </div>
  );
}

