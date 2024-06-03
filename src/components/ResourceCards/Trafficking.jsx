import React, { useState } from 'react'; 
import '../../style.css'; 

export default function Trafficking() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);
  const [isFlipped8, setIsFlipped8] = useState(false); 
  const [isFlipped9, setIsFlipped9] = useState(false); 
  const [isFlipped10, setIsFlipped10] = useState(false); 

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

  const toggleCardFlip6 = () => {
    setIsFlipped6(!isFlipped6);
  };

  const toggleCardFlip7 = () => {
    setIsFlipped7(!isFlipped7);
  };

  const toggleCardFlip8 = () => {
    setIsFlipped8(!isFlipped8);
  };
  const toggleCardFlip9 = () => {
    setIsFlipped9(!isFlipped9);
  };

  const toggleCardFlip10 = () => {
    setIsFlipped10(!isFlipped10);
  };


  return (
    <div className="card-resources">

      {/* Card 1- Hopeful Horizons */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Hopeful Horizons </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 1212 Charles St, Beaufort, SC 29902 <br />
            <strong>Phone:</strong> (843) 770-1070 <br />
            <strong>Website:</strong> <a href="https://www.hopefulhorizons.org/" target="_blank" rel="noopener noreferrer">https://www.hopefulhorizons.org/</a><br />
            <strong>Services (Free) :  </strong>
            <ul>
              <li>A 24-hour support line</li>
              <li>Emergency domestic violence shelter</li>
              <li>Transitional housing services for victims of domestic violence</li>
              <li>Therapy and counseling for survivors of child abuse, domestic violence, and sexual assault (trauma treatment and crisis counseling)</li>
            </ul>

          </p>

        </div>
      </div>

      {/* Card 2 - Hampton County DSS */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Hampton County DSS  </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 102 Ginn Altman Ave., Ste. A Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803) 943-3641 <br />
            <strong>Contact:</strong> Bridget Gray-Peeples, County Director<br />
            <strong>Website:</strong> <a href="https://dss.sc.gov/contact-dss/lowcountry-region/hampton" target="_blank" rel="noopener noreferrer">https://dss.sc.gov/contact-dss/lowcountry-region/hampton</a><br />
            <strong>Mission: </strong> To report known or suspected abuse or neglect of a child or vulnerable adult, call the SCDSS 24/7 Abuse & Neglect Reporting Hotline: 
            <ul>
              <li>1-888-CARE4US </li>
              <li>1-888-227-3487 </li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3 - Fresh Start Healing Heart */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>Fresh Start Healing Heart </h5>
        </div>
        <div className="cardR card-back">
          <p>
              <strong>Contact:</strong> Sheila Roemeling, Executive Director/Founder <br />
              <strong>Cell: </strong> (843) 338-8896 hotline <br />
              <strong>Office: </strong> (843) 644-1991 <br />
              <strong>Email:</strong> <a href="mailto:director@freshstarthealingheart.org">director@freshstarthealingheart.org</a> <br />
              <strong>Website:</strong> <a href="https://www.freshstarthealingheart.org/" target="_blank" rel="noopener noreferrer">https://www.freshstarthealingheart.org/</a><br />
              <strong>Facebook:</strong> <a href="https://www.facebook.com/freshstarthealingheart" target="_blank" rel="noopener noreferrer">https://www.facebook.com/freshstarthealingheart</a><br />
              <strong>Mission: </strong> Rescuing, Renewing, Raising Awareness of Trafficked Survivors <br />
              <strong>Services: </strong> 
              <ul>
                <li>Safe Housing</li>
                <li>Case Management</li>
                <li>Awareness</li>
                <li>Fresh Start Clothing and Accessories store</li>
              </ul>
            </p>
          
        </div>
      </div>

      {/* Card 4 - Estill Police Department  */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>Estill Police Department </h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> 205 Martin L. King Jr. Blvd. Estill, SC 29918  <br />
              <strong>Phone:</strong> (803) 625-3699 <br />
              <strong>Contact:</strong> Chief Chauncey Solomon <br />
              <strong>Email:</strong> <a href="mailto:c.solomon@townofestill.sc.gov">c.solomon@townofestill.sc.gov</a> <br />
            </p>

        </div>
      </div>

      {/* Card 5 - Gifford Police Department */}
      <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
        <div className="cardR card-front">
          <h5>Gifford Police Department </h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> <a href="https://www.google.com/maps/place/236+Walker+St,+Gifford,+SC+29923/@32.861677,-81.2377466,17z/data=!3m1!4b1!4m5!3m4!1s0x88f966b355943553:0x8601221856c911b0!8m2!3d32.861677!4d-81.2351717?entry=ttu" target="_blank">236 Walker Street Gifford, South Carolina 29932 </a><br />
              <strong>Phone:</strong> (803) 842-2055 
            </p>

        </div>
      </div>


      {/* Card 6 -  Hampton County Sheriff Department */}
      <div className={`card-container ${isFlipped6 ? 'flip' : ''}`} onClick={toggleCardFlip6}>
        <div className="cardR card-front">
          <h5> Hampton County Sheriff Department </h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> 411 Cemetery Rd. Varnville, SC 29944 <br />
              <strong>Phone:</strong> (803) 942-4449 <br />
              <strong>Contact:</strong> Sheriff Anthony Russell <br />
              <strong>Email:</strong> <a href="mailto:arussell@hamptoncountysc.org">arussell@hamptoncountysc.org</a> <br />
            </p>

        </div>
      </div>

    {/* Card 7 - Hampton County Detention Center */}
    <div className={`card-container ${isFlipped7 ? 'flip' : ''}`} onClick={toggleCardFlip7}>
        <div className="cardR card-front">
          <h5>Hampton County Detention Center </h5> <br />
        </div>
          <div className="cardR card-back">
            <p>
                <strong>Address:</strong> 411 Cemetery Rd. Varnville, SC 29944 <br />
                <strong>Phone:</strong> (803) 914-2221 <br />
                <strong>Contact: </strong> Pamela Smith, Director <br />
                <strong>Email:</strong> <a href="mailto:psmith@hamptoncountysc.org">psmith@hamptoncountysc.org</a> <br />
              </p>

        </div>
    </div>


    {/* Card 8 - Hampton Police Department */}
    <div className={`card-container ${isFlipped8 ? 'flip' : ''}`} onClick={toggleCardFlip8}>
        <div className="cardR card-front">
          <h5>Hampton Police Department </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 608 1st St W Hampton, SC 29924  <br />
            <strong>Phone:</strong> (803) 943-2421 <br /> 
            <strong>Contact: </strong> Assistant Chief Troy Long <br />
            <strong>Email:</strong> <a href="mailto:TLong@Hamptonsc.org">TLong@Hamptonsc.org</a> <br />
          </p>

        </div>
      </div>

    {/* Card 9- Varnville Police Department */}
      <div className={`card-container ${isFlipped9 ? 'flip' : ''}`} onClick={toggleCardFlip9}>
        <div className="cardR card-front">
          <h5>Varnville Police Department </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address: </strong>63 E Palmetto Ave Varnville, SC 29944  <br />
            <strong>Phone:</strong> (803) 943-2979 <br /> 
            <strong>Contact: </strong> Chief Tyrone Smith <br /> 
            <strong>Email:</strong> <a href="mailto:chieftsmith@varnville.sc.gov">chieftsmith@varnville.sc.gov</a> <br />
          </p>

        </div>
      </div>

      {/* Card 10 - Yemassee Police Department */}
      <div className={`card-container ${isFlipped10 ? 'flip' : ''}`} onClick={toggleCardFlip10}>
        <div className="cardR card-front">
          <h5>Yemassee Police Department </h5>
        </div>
        <div className="cardR card-back">
        <p>
            <strong>Address: </strong>101 Town Circle Yemassee, SC 29945 <br />
            <strong>Phone:</strong> (843) 589-6315 <br /> 
            <strong>Contact: </strong> Chief Gregory Z. Alexander <br /> 
            <strong>Email:</strong> <a href="mailto:galexander@townofyemassee.org">galexander@townofyemassee.org</a> <br />
          </p>
          
        </div>
      </div>

    </div>
  );
}
