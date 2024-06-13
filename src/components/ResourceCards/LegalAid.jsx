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
          <h3>Department of Juvenile Justice </h3>
          <img src="https://media.istockphoto.com/id/1162658095/photo/law-and-justice-legality-concept-judge-gavel-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lmyPbxVxIEnhJ6ckxS17oZi77BnV1UqYbm4u_r3L-M4=" alt="Card 1 " 
          style={{ width: '250px', height: '175px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/1+Elm+St+E,+Hampton,+SC+29924/@32.8667401,-81.108608,17z/data=!3m1!4b1!4m5!3m4!1s0x88f95c3a7fec4e11:0x84b7afa7b6c1bad4!8m2!3d32.8667401!4d-81.108608?entry=ttu">1 Elm St E, Hampton, SC 29924</a><br />
            <strong>Phone:</strong> <a href="tel:+8039434296">(803) 943-4296</a> <br />
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
          <h3>Veterans Affairs </h3>
          <img src="https://www.va.gov/img/homepage/va-logo-white.png" alt="Card 1 " 
          style={{ width: '450px', height: '130px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/B.T+Deloach,+201+Jackson+Ave+W.Hampton,+SC+29924/@32.8672882,-81.1107948,3a,75y,222.73h,90t/data=!3m4!1e1!3m2!1soF6M3_wymmG8-HemlN4vZA!2e0!4m2!3m1!1s0x88f95c30fc1a4c4b:0x23189bf084194f74?sa=X&ved=1t:3780&ictx=111">B.T Deloach, 201 Jackson Ave W.Hampton, SC 29924</a><br />
            <strong>Phone:</strong> <a href="tel:+8039142085">(803) 914-2085</a> <br />
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

