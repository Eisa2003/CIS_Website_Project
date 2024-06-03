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
          <h5>GSHG Troop #30089 </h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address: </strong> 2948 Rock Springs Rd Varnville, SC 29944 <br />
              <strong>Phone: </strong> (803) 842 5338 Text  <br />  
              <strong>Email:</strong> <a href="mailto:adlong45@yahoo.com">adlong45@yahoo.com </a> <br /> 
              <strong>Website:</strong> <a href="https://www.gshg.org/" target="_blank" rel="noopener noreferrer">https://www.gshg.org/</a><br /> 
              <ul>
                <li>GS Troop meets every Thursday at 6pm at the Hampton United Methodist Church Annex Building. </li>
              </ul>    
            </p>

        </div>
      </div>

      {/* Card 2 - Clemson Extension */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Clemson Extension </h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address: </strong> 12 Walnut St. E Hampton, SC 29924 <br />
              <strong>Phone: </strong> (803) 943-3427  <br />  
              <strong>Contact: </strong> Jackie Gallagher, Rural Health and Nutrition Associate  <br /> 
              <strong>Email:</strong> <a href="mailto:adlong45@yahoo.com">adlong45@yahoo.com </a> <br /> 
              <strong>Website:</strong> <a href="https://www.clemson.edu/extension/co/hampton.html" target="_blank" rel="noopener noreferrer">https://www.clemson.edu/extension/co/hampton.html</a><br /> 
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
          <h5>South Carolina State Extension </h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Phone: </strong> (803) 942-1394 <br />  
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
          <h5>CJ Filling Station </h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address: </strong> 43 East Palmetto Ave. Varnville, SC 29944 <br />
              <strong>Phone: </strong> (803) 842-3313 <br />  
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

