import React, { useState } from 'react'; 
import '../../style.css'; 

export default function LegalAid() {
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
      {/* Card 1- Department of Juvenile Justice */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Department of Juvenile Justice </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 1 Elm St E, Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803) 943-4296 <br />
            <strong>Contact:</strong> Jaime White, Hampton County Director <br />
            <strong>Mission: </strong><br /> To develop a continuum of effective programmatic initiatives 
                                       that lead to creating a restorative justice system for all who are impacted by juvenile crime -- 
                                       juveniles, their families, and victims. Services: Prevention, Juvenile Arbitration, Right Turn, 
                                       Interstate Compact Services and Teen After-School Centers.     
          </p>

        </div>
      </div>

      {/* Card 2 - Veterans Affairs */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Veterans Affairs </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> B.T Deloach, 201 Jackson Ave W.Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803) 914-2085 <br />
            <strong>Contact:</strong> Altresia Orr, County Veterans Affairs Officer <br />
            <strong>Email:</strong> <a href="mailto:agordon-orr@hamptoncountysc.org">agordon-orr@hamptoncountysc.org</a> <br />
            <strong>Mission: </strong><br /> The function of the Hampton County Veterans Affairs Office is to assist veterans and their 
                                      dependents or survivors in filing applications to determine their eligibility and conditions of benefits entitlement 
                                      as administered by the US Dept. of Veterans Affairs.
          </p>
          
        </div>
      </div>
      
      </div>
  );
}

