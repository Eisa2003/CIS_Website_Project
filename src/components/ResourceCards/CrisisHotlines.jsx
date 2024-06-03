import React, { useState } from 'react'; 
import '../../style.css'; 

export default function CrisisHotlines() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);


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

  return (
    <div className="card-resources">
      {/* Card 1- 988 Suicide and Crisis Lifeline  */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>988 Suicide and Crisis Lifeline </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong> </strong><br /> Can be dialed or texted 24/7 for access to trained crisis counselors.<br /><br />
            <strong>Phone:</strong> 988 <br />
            <strong>Español:</strong> (888) 628-9454 <br />    
          </p>

        </div>
      </div>

      {/* Card 2 - SAMHSA’s National Helpline  */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>SAMHSA’s National Helpline </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Phone:</strong> 1-800-662-HELP (4357) <br />
            <strong>Mission: </strong><br /> Free, confidential, 
                                            24/7, 365-day-a-year treatment referral and 
                                            information service (in English and Spanish) 
                                            for individuals and families facing mental and/or substance use disorders.
          </p>
          
        </div>
      </div>
      
      {/* Card 3 - Veterans Crisis Line */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>Veterans Crisis Line </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Phone:</strong> 988 <br />
            <strong>Text: </strong> 838255 <br />
            <strong>Mission: </strong><br /> Free, confidential resource that’s available to anyone, 
                                             even if you’re not registered with VA or enrolled in VA health care. The caring, qualified 
                                             responders at the Veterans Crisis Line are specially trained and experienced in helping 
                                             Veterans of all ages and circumstances.
          </p>
          
        </div>
      </div>

      </div>
  );
}

