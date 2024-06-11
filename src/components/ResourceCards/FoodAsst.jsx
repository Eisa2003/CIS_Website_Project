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
          <h3>Food Stamp (SNAP Program)</h3>
          <img src="https://dss.sc.gov/img/logo.png" alt="Card 1 Image" style={{ width: '285px', height: '95px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>DSS</strong><br />
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/102+Ginn+Altman+Ave+a,+Hampton,+SC+29924/@32.8575706,-81.1161193,17z/data=!3m1!4b1!4m5!3m4!1s0x88f95c2b97f6c363:0x3400e2a5ad738eb1!8m2!3d32.8575706!4d-81.1161193?entry=ttu">102 Ginn Altman Ave, Ste A Hampton, SC  29924</a><br />
            <strong>Phone:</strong> <a href="tel:+8039433641">(803) 943-3641</a><br />
            <strong>Contact:</strong> Bridget Gray-Peeples, County Director<br />
            <strong>Website:</strong> <a class="linkweb" href="https://dss.sc.gov/contact-dss/lowcountry-region/hampton" target="_blank" rel="noopener noreferrer">www.dss.sc.gov/contact-dss/lowcountry-region/hampton</a>
          </p>

        </div>
      </div>

      {/* Card 2 - Greater Cherry Grove Church*/}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h3>Greater Cherry Grove Church</h3>
          <img src="https://img1.wsimg.com/isteam/ip/af6c148b-3a10-42e2-89b2-f70bc042dba0/Cherry%20Grove%20church%20logo.jpg/:/cr=t:0.08%25,l:0%25,w:100%25,h:99.84%25/rs=w:365,h:365,cg:true" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/1895+State+Rd+S-25-621,+Brunson,+SC+29911/@33.0028272,-81.0779218,17z/data=!3m1!4b1!4m5!3m4!1s0x88f9438a1b5313bb:0xf463bbe24f818a06!8m2!3d33.0028272!4d-81.0779218?entry=ttu">1895 Cherry Grove Road Brunson, SC 29911</a><br />
            <strong>Phone:</strong> <a href="tel:+8039420419">(803) 942-0419</a><br />
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
          <h3>First Estill Baptist Church</h3>
          <img src="https://img1.wsimg.com/isteam/ip/25136b0d-8b8d-4dde-b935-ec297ac09b1c/1ST%20BAPTIST%20CHURCH%20LOGO.png/:/rs=h:139,cg:true,m/qt=q:95" alt="Card 1 Image" 
          style={{ width: '230px', height: '125px' }} />
        </div>
        <div className="cardR card-back">
          <p>
          <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/968+Lawton+Ave,+Estill,+SC+29918/@32.7549226,-81.2378999,17z/data=!3m1!4b1!4m6!3m5!1s0x88fbdf4686dc8205:0x64d6ad0d89c5bb1a!8m2!3d32.7549226!4d-81.2378999!16s%2Fg%2F11c43yft_p?entry=ttu">968 Lawton Avenue Estill, SC 29918</a><br />
              <strong>Phone:</strong><a href="tel:+8039434964">(803) 943-4964</a> <br />
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
          <h3>The Chosen One Ministry</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImbewG7VVNPzh78da7pWgxy9TNGbGZMRqlQ&s" alt="Card 1 Image" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/211+Lee+Ave,+Hampton,+SC+29924/@32.8672918,-81.1077889,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c3a6e4700bf:0x3ece8a32ca3bddd1!8m2!3d32.8672918!4d-81.1077889!16s%2Fg%2F11c17rxg2q?entry=ttu">211 Lee Avenue Hampton, SC 29924</a><br />
              <strong>Phone:</strong> <a href="tel:+8039424027">(803) 942-4027</a> <br />
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
          <h3>Connexon-Open Arms Church</h3>
          <img src="https://img1.wsimg.com/isteam/ip/dbdab07e-112c-4236-95ea-cb188f3dee3c/Color%20logo%20with%20background.png/:/rs=w:208,h:200,cg:true,m/cr=w:208,h:200/qt=q:95" alt="Card 1 Image" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/185+Cemetery+Rd,+Hampton,+SC+29924/@32.8613674,-81.092485,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c19f3c44d37:0x9e90b4885d980dea!8m2!3d32.8613674!4d-81.092485!16s%2Fg%2F11c2bqlsnh?entry=ttu">185 Cemetery Road Hampton, SC 29924</a><br />
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
          <h3> Hampton County High School</h3>
          <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1644944742/hampton1k12scus/siiklwxts161eil1h8uq/H_black.png" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/115+Airport+Rd,+Hampton,+SC+29924/@32.8595544,-81.0908406,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c1bcb2cbe13:0xb1d5ebfee8718472!8m2!3d32.860294!4d-81.091332!16s%2Fg%2F11bw428ygk?entry=ttu">115 Airport Road Hampton, SC 29924</a><br />
              <strong>Phone:</strong> <a href="tel:+8039433568">(803) 943-3568</a> <br />
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
          <h3>Hampton United Methodist</h3> <br />
          <img src="data:image/jpeg;base64,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" 
          style={{ width: '150px', height: '150px' }} />
        </div>
          <div className="cardR card-back">
            <p>
                <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/204+Elm+St+W,+Hampton,+SC+29924/@32.86811,-81.1103169,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c30c2296293:0x9c721be92637cf32!8m2!3d32.86811!4d-81.1103169!16s%2Fg%2F11c1jsl134?entry=ttu">204 Elm Street West Hampton, SC 29924</a><br />
                <strong>Phone:</strong> <a href="tel:+8039032040">(803) 903-2040</a> <br />
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
          <h3>Hopewell CME Church </h3>
          <img src="data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/HOPEWELL+C.M.E+CHURCH/@32.685438,-81.3032983,17z/data=!3m1!4b1!4m6!3m5!1s0x88fbda29f54c0809:0x5d98b5d55d8bd8de!8m2!3d32.685438!4d-81.3007234!16s%2Fg%2F1tdh9956?entry=ttu">3200 Daley Road Scotia, SC 29939</a><br />
            <strong>Phone:</strong> <a href="tel:+8039421062">(803) 942-1062</a> <br /> 
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
          <h3>Huspah Missionary Baptist Church Ministries</h3>
          <img src="https://media.istockphoto.com/id/1035198222/photo/globe-and-black-bible.jpg?s=612x612&w=0&k=20&c=JGXunfy73dr2HuY5x4HqXjPSOtUyQVslhqD4B-d6GZs=" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>FoodShare Hub- Fruit & Vegetable Food Box </strong><br />
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/719+Magnolia+St+W,+Hampton,+SC+29924/@32.8735631,-81.1148131,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c35c351935f:0x9b7642b513b82db5!8m2!3d32.8735631!4d-81.1148131!16s%2Fg%2F11crrzz8wn?entry=ttu">719 Magnolia Street Hampton, SC 29924</a><br />
            <strong>Phone:</strong> <a href="tel:+8039430033">(803) 943-0033</a> <br /> 
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
          <h3>Huspah Missionary Baptist Church</h3>
          <img src="https://media.istockphoto.com/id/1219384600/photo/religion-in-africa.jpg?s=612x612&w=0&k=20&c=3oCFaG00cSVbghUxk9siTKS-37z_-g2L8wpsh_WXDF8=" 
          style={{ width: '150px', height: '100px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Food Distribution </strong><br />
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/729+Magnolia+St+W,+Hampton,+SC+29924/@32.8742231,-81.1156858,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c35940eb8e1:0x77ae630f00c34753!8m2!3d32.8742231!4d-81.1156858!16s%2Fg%2F11c885x00l?entry=ttu">729 Magnolia Street Hampton, SC 29924</a><br />
            <strong>Phone:</strong> <a href="tel:+8039434331">(803) 943-4331</a> <br /> 
            <strong>Hours of Operation: </strong>
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
          <h3>Lawtonville Baptist </h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y95S3hBNZpl9eBp7NViZ4pyiNoyHZkGmPQ&s" 
          style={{ width: '200px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/460+4th+St,+Estill,+SC+29918/@32.754979,-81.2375912,17z/data=!3m1!4b1!4m6!3m5!1s0x88fbdf4683084e79:0x2b7c165dcaa0d29a!8m2!3d32.754979!4d-81.2375912!16s%2Fg%2F11c2dd1ny3?entry=ttu">460 4th Street Estill, SC 29918 </a><br />
              <strong>Phone:</strong> <a href="tel:+8036252871">(803) 625-2871</a> <br /> 
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
          <h3>New Abundant Life Church</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpaBpJnOG3_DMwzBzws-sTMPaOpEuN5tR_g&s" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/115+Foster+St,+Varnville,+SC+29944/@32.8635056,-81.088129,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c106a6dc467:0xa06856400535bafa!8m2!3d32.8635056!4d-81.088129!16s%2Fg%2F11c4qgzl9q?entry=ttu">115 Foster Road Varnville, SC 29944</a><br />
            <strong>Phone:</strong> <a href="tel:+8032584777">(803) 258-4777</a> <br />
            <strong>Hours of Operation: </strong>
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
          <h3>Mt. Sinai Baptist-Hampton </h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4L5TmC61Zl0nATFs3AexXCEfUwckFYTyEIQ&s" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/search/455+Mount+Sinai+Road+Varnville,+SC+29944/@32.8542499,-81.080527,14z?entry=ttu">455 Mt. Sinai Road Varnville, SC 29944</a><br />
            <strong>Phone:</strong> <a href="tel:+8039434441">(803) 943-4441</a> <br />
            <strong>Hours of Operation: </strong>
            <ul>
              <li>2nd and 4th Saturday of month </li>
              <li>10am-12pm </li>
            </ul>
          </p>

        </div>
      </div>


      {/* Card 14 - Miracles Are Happening Now */}
      <div className={`card-container ${isFlipped14 ? 'flip' : ''}`} onClick={toggleCardFlip14}>
        <div className="cardR card-front">
          <h3>Miracles Are Happening Now </h3>
          <img src="https://miraclesarehappeningnow.com/wp-content/uploads/2022/09/Miracles-Are-Happening-Now-Worship-Center-Logo.png" 
          style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/234+Pepper+St,+Varnville,+SC+29944/@32.8420182,-81.0739762,17z/data=!3m1!4b1!4m6!3m5!1s0x88f9595318e98443:0x22430dba4e86b98a!8m2!3d32.8420182!4d-81.0739762!16s%2Fg%2F11rkct7ds6?entry=ttu">234 Pepper Street Varnville, SC 29944</a><br />
            <strong>Phone:</strong> <a href="tel:+8039140744">(803) 914-0744</a> <br />
            <strong>Hours of Operation: </strong>
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
          <h3>Greater Faith International Ministries </h3> <br />
          <img src="https://images.squarespace-cdn.com/content/v1/5f7f5023eade434a97d38d93/1603719778099-HRJL8TMLHRD25GI4MUXS/Greater+Faith+LOGO+mockups+4+%282%29.png?format=1500w" 
          style={{ width: '150px', height: '150px' }} />
        </div>
          <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/325+W+Carolina+Ave,+Varnville,+SC+29944/@32.8526722,-81.0851157,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c02e9d507e1:0x9892dffa49c9eacf!8m2!3d32.8526722!4d-81.0851157!16s%2Fg%2F11c1glglbz?entry=ttu">325 W Carolina Avenue Varnville, SC 29944</a><br />
              <strong>Phone:</strong> <a href="tel:+8039439443">(803) 943-9443</a> <br />
              <ul>
                <li>By appointment  </li>
              </ul>
            </p>
        </div>
    </div>


    {/* Card 16 - St. Jude Apostolic Faith Church */}
    <div className={`card-container ${isFlipped16 ? 'flip' : ''}`} onClick={toggleCardFlip16}>
        <div className="cardR card-front">
          <h3>St. Jude Apostolic Faith Church </h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_d_CNP-iFpXcJuCbh2ruAp_x9cfGBomX5g&s" style={{ width: '150px', height: '150px' }} />

        </div>
        <div className="cardR card-back">
            <p>
              <strong>Address:</strong> <a class="link" href="https://www.google.com/maps/place/St.+Jude+Apostolic+Church+House+of+Refuge+for+All/@32.6937032,-80.8639337,17z/data=!3m1!4b1!4m6!3m5!1s0x88fbfffbc9b284c9:0x941b01791f0444eb!8m2!3d32.6937032!4d-80.8639337!16s%2Fg%2F11gjt8nnt3?entry=ttu">286 Bing Street Yemassee, SC 29945</a><br />
              <strong>Phone:</strong><a href="tel:+8435897270">(843) 589-7270</a> <br />
              <strong>Hours of Operation: </strong>
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
              <h3>Lowcountry Blessing Boxes </h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbuAYKR8qLgaNt6jxJYw64zU5Xmd7d76RAw&s" 
              style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="cardR card-back">
              <p>
              <strong>Mission: </strong> Blessing Boxes are stocked with non-perishable food items,
                                         basic toiletries, baby supplies, and anything else that might 
                                         be considered a blessing to someone who finds themselves in need. 
                                         Items are anonymously donated and anonymously received and available at any time day or night. <br />
              <strong>Locations: </strong><br />
              <ul>
                <li><strong>BRUNSON- </strong><a class="link" href="https://www.google.com/maps/place/800+N+Railroad+Ave,+Brunson,+SC+29911/@32.9276338,-81.1914481,17z/data=!3m1!4b1!4m5!3m4!1s0x88f967c72c531181:0xd62947a2bdff83e8!8m2!3d32.9276338!4d-81.1914481?entry=ttu">800 North Railroad Ave., Brunson SC</a><br /></li>
                <li><strong>HAMPTON- </strong><a class="link" href="https://www.google.com/maps/place/Hampton%2FVarnville+United+Methodist+Church/@32.8680228,-81.1103636,17z/data=!3m1!4b1!4m6!3m5!1s0x88f95c30eb61c513:0xec4d016f89788e80!8m2!3d32.8680228!4d-81.1103636!16s%2Fg%2F1tg6ldm5?entry=ttu">204 Elm Street West (Hampton UMC)</a><br /> </li>
                <li><strong>YEMASSEE- </strong><a class="link" href="https://www.google.com/maps/place/132+Yemassee+Hwy,+Yemassee,+SC+29945/@32.6931046,-80.8554981,17z/data=!3m1!4b1!4m5!3m4!1s0x88fbfefde9ddc33b:0x2b2b1f69f0e0bc6b!8m2!3d32.6931046!4d-80.8554981?entry=ttu">132 Yemassee Highway, Yemassee SC</a><br /> </li>
              </ul>         
              </p>

            </div>
          </div>

    </div>
  );
}
