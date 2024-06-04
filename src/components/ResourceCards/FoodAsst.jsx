import React, { useState } from 'react'; 
import '../../style.css'; 

export default function EmpAndEdu() {
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
  const [isFlipped11, setIsFlipped11] = useState(false);
  const [isFlipped12, setIsFlipped12] = useState(false);
  const [isFlipped13, setIsFlipped13] = useState(false);
  const [isFlipped14, setIsFlipped14] = useState(false);
  const [isFlipped15, setIsFlipped15] = useState(false);
  const [isFlipped16, setIsFlipped16] = useState(false); 
  const [isFlipped17, setIsFlipped17] = useState(false); 

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

  const toggleCardFlip11 = () => {
    setIsFlipped11(!isFlipped11);
  };

  const toggleCardFlip12 = () => {
    setIsFlipped12(!isFlipped12);
  };

  const toggleCardFlip13 = () => {
    setIsFlipped13(!isFlipped13);
  };

  const toggleCardFlip14 = () => {
    setIsFlipped14(!isFlipped14);
  };

  const toggleCardFlip15 = () => {
    setIsFlipped15(!isFlipped15);
  };

  const toggleCardFlip16 = () => {
    setIsFlipped16(!isFlipped16);
  };

  const toggleCardFlip17 = () => {
    setIsFlipped17(!isFlipped17);
  };

  return (
    <div className="card-resources">

      {/* Card 1- Food Stamp (SNAP Program)  */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Food Stamp (SNAP Program)</h5>
          <img src="https://dss.sc.gov/img/logo.png" alt="Card 1 Image" style={{ width: '285px', height: '95px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>DSS</strong><br />
            <strong>Address:</strong> 102 Ginn Altman Ave, Ste A Hampton, SC  29924<br />
            <strong>Phone:</strong> (803) 943-3641<br />
            <strong>Contact:</strong> Bridget Gray-Peeples, County Director<br />
            <strong>Website:</strong> <a href="https://dss.sc.gov/contact-dss/lowcountry-region/hampton" target="_blank" rel="noopener noreferrer">https://dss.sc.gov/contact-dss/lowcountry-region/hampton</a>
          </p>

        </div>
      </div>

      {/* Card 2 - Greater Cherry Grove Church*/}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Greater Cherry Grove Church</h5>
          <img src="https://img1.wsimg.com/isteam/ip/af6c148b-3a10-42e2-89b2-f70bc042dba0/Cherry%20Grove%20church%20logo.jpg/:/cr=t:0.08%25,l:0%25,w:100%25,h:99.84%25/rs=w:365,h:365,cg:true" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 1895 Cherry Grove Road Brunson, SC 29911 <br />
            <strong>Phone:</strong> (803)942-0419 <br />
            <strong>Hours of Operation: </strong> 
            <ul>
              <li>2nd Thursday of month</li>
              <li>10:00am-12:00pm </li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3 - First Estill Baptist Church*/}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>First Estill Baptist Church</h5>
        </div>
        <div className="cardR card-back">
          <p>
              <strong>Address:</strong> 968 Lawton Avenue Estill, SC 29918  <br />
              <strong>Phone:</strong> (803)943-4964 <br />
              <strong>Hours of Operation: </strong> 
              <ul>
                <li>3rd Saturday of month </li>
                <li>8am-10am  </li>
              </ul>
            </p>
          
        </div>
      </div>

      {/* Card 4 - The Chosen One Ministry */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>The Chosen One Ministry</h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> 211 Lee Avenue Hampton, SC 29924<br />
              <strong>Phone:</strong> (803) 942-4027 <br />
              <strong>Hours of Operation: </strong> 
              <ul>
                <li>2nd and 4th Saturday of month </li>
                <li>10am-12pm </li>
              </ul>
            </p>

        </div>
      </div>

      {/* Card 5 - Connexon-Open Arms Church */}
      <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
        <div className="cardR card-front">
          <h5>Connexon-Open Arms Church</h5>
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> 185 Cemetery Road Hampton, SC 29924<br />
              <strong>Hours of Operation: </strong> 
              <ul>
                <li>Every Monday</li>
                <li>9am-10:30am </li>
              </ul>
            </p>

        </div>
      </div>


      {/* Card 6 -  Hampton County High School*/}
      <div className={`card-container ${isFlipped6 ? 'flip' : ''}`} onClick={toggleCardFlip6}>
        <div className="cardR card-front">
          <h5> Hampton County High School</h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> 115 Airport Road Hampton, SC 29924<br />
              <strong>Phone:</strong> (803) 943-3568 <br />
              <strong>Hours of Operation: </strong> 
              <ul>
                <li>2nd and 4th Tuesdays </li>
                <li>3:15pm-4pm</li>
              </ul>
            </p>

        </div>
      </div>

    {/* Card 7 - Hampton United Methodist */}
    <div className={`card-container ${isFlipped7 ? 'flip' : ''}`} onClick={toggleCardFlip7}>
        <div className="cardR card-front">
          <h5>Hampton United Methodist</h5> <br />
        </div>
          <div className="cardR card-back">
            <p>
                <strong>Address:</strong> 204 Elm Street West Hampton, SC 29924<br />
                <strong>Phone:</strong> (803) 903-2040 <br />
                <strong>Hours of Operation: </strong> 
                <ul>
                  <li>4th Friday of month</li>
                  <li>11am </li>
                </ul>
              </p>

        </div>
    </div>


    {/* Card 8 - Hopewell CME Church */}
    <div className={`card-container ${isFlipped8 ? 'flip' : ''}`} onClick={toggleCardFlip8}>
        <div className="cardR card-front">
          <h5>Hopewell CME Church </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address: </strong>3200 Daley Road Scotia, SC 29939 <br />
            <strong>Phone:</strong> (803) 942-1062 <br /> 
            <strong>Hours of Operation: </strong> 
                <ul>
                  <li>Every other Saturday </li>
                  <li>12pm-2pm </li>
                </ul>
          </p>

        </div>
      </div>

    {/* Card 9- Huspah Missionary Baptist Church Ministries*/}
      <div className={`card-container ${isFlipped9 ? 'flip' : ''}`} onClick={toggleCardFlip9}>
        <div className="cardR card-front">
          <h5>Huspah Missionary Baptist Church Ministries</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>FoodShare Hub- Fruit & Vegetable Food Box </strong><br />
            <strong>Address: </strong>719 Magnolia Street Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803) 943-0033 <br /> 
            <strong>Hours of Operation: </strong> 
                <ul>
                  <li>Alternate Wednesdays </li>
                  <li>Distribution 10AM – 4PM</li>
                  <li>Cost: $5 SNAP/EBT or $20 cash</li>
                </ul>
          </p>

        </div>
      </div>

      {/* Card 10 - Huspah Missionary Baptist Church*/}
      <div className={`card-container ${isFlipped10 ? 'flip' : ''}`} onClick={toggleCardFlip10}>
        <div className="cardR card-front">
          <h5>Huspah Missionary Baptist Church</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Food Distribution </strong><br />
            <strong>Address:</strong> 729 Magnolia Street Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803) 943-4331 <br /> 
            <ul>
              <li>4th Thursday of month </li>
              <li>10am</li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 11 - Lawtonville Baptist */}
      <div className={`card-container ${isFlipped11 ? 'flip' : ''}`} onClick={toggleCardFlip11}>
        <div className="cardR card-front">
          <h5>Lawtonville Baptist </h5>
        </div>
        <div className="cardR card-back">
          <p>
              <strong>Address: </strong> 460 4th Street Estill, SC 29918  <br />
              <strong>Phone:</strong> (803) 625-2871 <br /> 
              <strong>Hours of Operation: </strong> 
                  <ul>
                    <li>3rd Sunday </li>
                  </ul>
            </p>
          
        </div>
      </div>

      {/* Card 12 - New Abundant Life Church */}
      <div className={`card-container ${isFlipped12 ? 'flip' : ''}`} onClick={toggleCardFlip12}>
        <div className="cardR card-front">
          <h5>New Abundant Life Church</h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 115 Foster Road Varnville, SC 29944 <br />
            <strong>Phone:</strong> (803) 258-4777 <br />
            <ul>
              <li>Thursdays </li>
              <li>9am-11am </li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 13 - Mt. Sinai Baptist-Hampton */}
      <div className={`card-container ${isFlipped13 ? 'flip' : ''}`} onClick={toggleCardFlip13}>
        <div className="cardR card-front">
          <h5>Mt. Sinai Baptist-Hampton </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 455 Mt. Sinai Road Varnville, SC 29944  <br />
            <strong>Phone:</strong> (803) 943-4441 <br />
            <ul>
              <li>2nd and 4th Saturday of month </li>
              <li>10am-12pm </li>
            </ul>
          </p>

        </div>
      </div>


      {/* Card 14 - Miracles of Happening Now */}
      <div className={`card-container ${isFlipped14 ? 'flip' : ''}`} onClick={toggleCardFlip14}>
        <div className="cardR card-front">
          <h5>Miracles of Happening Now </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 234 Pepper Street Varnville, SC 29944 <br />
            <strong>Phone:</strong> (803) 914-0744 <br />
            <ul>
              <li>3rd Saturday of month </li>
              <li>8am-11am </li>
            </ul>
          </p>

        </div>
      </div>

    {/* Card 15 - Greater Faith International Ministries */}
    <div className={`card-container ${isFlipped15 ? 'flip' : ''}`} onClick={toggleCardFlip15}>
        <div className="cardR card-front">
          <h5>Greater Faith International Ministries </h5> <br />
        </div>
          <div className="cardR card-back">
            <p>
              <strong>Address:</strong> 325 W Carolina Avenue Varnville, SC 29944 <br />
              <strong>Phone:</strong> (803) 943-9443 <br />
              <ul>
                <li>By appointment  </li>
              </ul>
            </p>
        </div>
    </div>


    {/* Card 16 - St. Jude Apostolic Faith Church */}
    <div className={`card-container ${isFlipped16 ? 'flip' : ''}`} onClick={toggleCardFlip16}>
        <div className="cardR card-front">
          <h5>St. Jude Apostolic Faith Church </h5>
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> 286 Bing Street Yemassee, SC 29945 <br />
              <strong>Phone:</strong> (843) 589-7270  <br />
              <ul>
                <li>1st and 2nd Saturday of month  </li>
                <li>10am-12pm </li>
              </ul>         
            </p>

        </div>
      </div>

    {/* Card 17 - Lowcountry Blessing Boxes*/}
    <div className={`card-container ${isFlipped17 ? 'flip' : ''}`} onClick={toggleCardFlip17}>
            <div className="cardR card-front">
              <h5>Lowcountry Blessing Boxes </h5>
            </div>
            <div className="cardR card-back">
              <p>
              <strong>Mission: </strong> Blessing Boxes are stocked with non-perishable food items,
                                         basic toiletries, baby supplies, and anything else that might 
                                         be considered a blessing to someone who finds themselves in need. 
                                         Items are anonymously donated and anonymously received and available at any time day or night. <br />
              <strong>Locations: </strong><br />
              <ul>
                <li><strong>BRUNSON- </strong>800 North Railroad Ave., Brunson SC </li>
                <li><strong>HAMPTON- </strong>204 Elm Street West (Hampton UMC) </li>
                <li><strong>YEMASSEE- </strong>132 Yemassee Highway </li>
              </ul>         
              </p>

            </div>
          </div>

    </div>
  );
}
