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

  return (
    <div className="card-resources">
      {/* Card 1 - Adult Education */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front"><br />
          <h5>Adult Education</h5>
            <img src="https://www.wsav.com/wp-content/uploads/sites/75/2020/07/Jasper-County-School-District.png?w=1280" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 303 1st St E, Hampton, SC 29924<br />
            <strong>Phone:</strong> (803) 903-1052<br />
            <strong>Contact:</strong> Diane Cuyler<br />
            <strong>Website:</strong> <a href="https://www.jcsd.net/apps/pages/JAHAAdultEducation" target="_blank" rel="noopener noreferrer">JAHA Adult Education</a>
          </p>
        </div>
      </div>



      {/* Card 2 - Avery C. Thompson, Sr. Community Center */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Avery C. Thompson, Sr. Community Center</h5>
          <img src="https://img1.wsimg.com/isteam/ip/0201aa70-dd41-426c-bcdd-0c748b15feba/blob-5ec37ce.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:700,cg:true" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 63 East Palmetto Ave, 
                                      Post Office Box 601  
                                      Varnville, SC 29944  <br />
            <strong>Phone:</strong> (803) 842-6316 <br />
            <strong>Contact:</strong> Verta Thompson, Executive Director <br />
            <strong>Email:</strong> <a href="mailto:actcc92@gmail.com">actcc92@gmail.com</a> <br />
            <strong>Mission Statement:</strong> Improving the quality of life for at-risk children, youth, 
                                                and families through outreach, academic, and arts training.  
            <ul>
              <li>Childcare assistance vouchers</li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3 - Communities in Schools */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>Communities in Schools</h5>
          <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/278906926_355475903280336_7094077715028869454_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Z0_spkVh9oQ7kNvgFCb7ri&_nc_ht=scontent-mia3-1.xx&oh=00_AYAwWqRv970DvCVvruY9CSxf0iiIq8lEqf6lwLT39UZB7Q&oe=6663DB97" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Contact Information</strong>
            <ul>
                <li>Janell Smart: <a href="mailto:jsmart@cisofsc.org">jsmart@cisofsc.org</a> at North District Middle School</li>
                <li>Tonnya Grant: <a href="mailto:tgrant@cisofsc.org">tgrant@cisofsc.org</a> at Hampton County High School</li>
            </ul>
            <strong>Mission Statement: </strong> To surround students with a community of support, 
            empowering them to stay in school and achieve in life.<br />

            <strong>Our Approach: </strong> Bridging relationships between schools, students, and the 
            community. We identify challenges students face in class or at home and coordinate with community partners to bring outside resources inside schools through 
            our evidence-based model of Integrated Student Supports.
          </p>
          
        </div>
      </div>

      {/* Card 4 - First Steps */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>First Steps</h5>
          <img src="https://hamptonfirststeps.org/wp-content/uploads/2020/02/hamptonlogosmaller.png?w=300" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 301 First Street East, Hampton, SC 29924<br />
            <strong>Phone:</strong> (803) 943-7127<br />
            <strong>Contact:</strong> Dwanda Doctor, Executive Director<br />
            <strong>Website:</strong> <a href="https://hamptonfirststeps.org/" target="_blank" rel="noopener noreferrer">hamptonfirststeps.org</a><br />
            <strong>Email:</strong> <a href="mailto:ddoctor@hamptonfirststeps.org">ddoctor@hamptonfirststeps.org</a><br />
            <strong>Programs:</strong>
            <ul>
              <li>Childcare assistance vouchers</li>
              <li>Parents as Teachers (PAT) is an evidence-based home visiting program designed to build strong communities, 
                  thriving families and children who are healthy, safe and ready to succeed.</li>
              <li>Childcare Training</li>
              <li>Countdown to Kindergarten</li>
              <li>Dolly Parton’s Imagination Library is a book gifting 
                  program that mails free books to children from birth to age </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Card 5 - Healthy Learners  */}
      <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
        <div className="cardR card-front">
          <h5>Healthy Learners</h5>
          <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/361650068_838688577846165_687013624872097574_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ND1PSakf_tkQ7kNvgEwPVx1&_nc_ht=scontent-mia3-1.xx&oh=00_AYDC4o8CfhnxX5FAkEtorxkCNrCmJToKVgT7hKR5cBny7A&oe=66641296" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Contact:</strong> Shelly Thomas, RN, ADN, Program Manager Lowcountry<br />
            <strong>Address:</strong> <br />
            <strong>Phone:</strong> (803) 584-8613 <br /> 
            <strong>Website:</strong> <a href="https://healthylearners.com/" target="_blank" rel="noopener noreferrer">https://healthylearners.com/</a><br />
            <strong>Mission: </strong> Healthy Learners is devoted to removing 
                                       children’s health barriers to learning with love and compassion. 
            <ul>
              <li>Vision Care</li>
              <li>Hearing Care</li>
              <li>Dental Care</li>
              <li>Asthma Care</li>
              <li>Transportation to Appointments </li>
              <li>Mental Health </li>
            </ul>
          </p>
        </div>
      </div>


      {/* Card 6 - Office of Student Services */}
      <div className={`card-container ${isFlipped6 ? 'flip' : ''}`} onClick={toggleCardFlip6}>
        <div className="cardR card-front">
          <h5>Office of Student Services</h5>
          <img src="data:image/jpeg;base64,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" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Contact:</strong> Loretta Darien, Director<br />
            <strong>Address:</strong> <br />
            <strong>Phone:</strong> (803) 803-943-4576 <br /> 
            <strong>Email:</strong> <a href="mailto:LDarien@hcsdsc.org">LDarien@hcsdsc.org</a><br />
            <strong>Website:</strong> <a href="https://www.hampton2.k12.sc.us/departments/office_of_student_services" target="_blank" rel="noopener noreferrer">https://www.hampton2.k12.sc.us/departments/office_of_student_services</a><br />
            <strong>Mission: </strong> The Student Services Department provides courteous and supportive assistance to students, parents, and 
                                        school personnel that promote student achievement and facilitate personal growth.  
                                        Assistance is available in the following areas: Social Work, McKinney-Vento Homeless 
                                        Education, Student Enrollment, Attendance, PowerSchool, Foster Care, Mental Health, 
                                        Student Discipline Hearings, Interagency Intervention, School Safety and Emergency Preparedness.  
          </p>
        </div>
      </div>

    {/* Card 7 - SC Works */}
    <div className={`card-container ${isFlipped7 ? 'flip' : ''}`} onClick={toggleCardFlip7}>
        <div className="cardR card-front">
          <h5>SC Works: WIOA Program</h5> <br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuj5_aBR4xBcByK57EhGwwiiUW0QT-TSq1w&s" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
          <div className="cardR card-back">
            <p>
            <strong>Contact:</strong> Shelia Bovain, Career Specialist <br />
            <strong>Address:</strong> 54 Tech Circle, Varnville, SC 29944 <br />
            <strong>Phone:</strong> (843) 226-9254  <br /> 
            <strong>Email:</strong> <a href="mailto:sbovain@rossworks.com">sbovain@rossworks.com</a><br />
            <strong>Website:</strong> <a href="https://www.lowcountrycog.org/workforce/our_services/index.php" target="_blank" rel="noopener noreferrer">https://www.lowcountrycog.org/workforce/our_services/index.php</a><br />
            <strong>Mission: </strong> The Workforce Innovation and Opportunity Act (WIOA) is designed to help jobseekers 
                                      access employment, education, training and support services to succeed in the labor market, 
                                       and to match employers with the skilled workers they need to compete in the global economy.  
            </p>
        </div>
    </div>


    {/* Card 8 - TT&T Services */}
    <div className={`card-container ${isFlipped8 ? 'flip' : ''}`} onClick={toggleCardFlip8}>
        <div className="cardR card-front">
          <h5>TT&T Services </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Contact:</strong> Ms. Dominic Rivers, Case Manager  <br />
            <strong>Phone:</strong> (443) 583-8873   <br /> 
            <strong>Services offered: </strong> Rides to appointments, school uniforms, rental assistance, utility assistance, finding employment, hygiene products, 
                                              diaper assistance, counseling, assessments, grief counseling, 
                                              weight loss management, primary care, adolescent care, geriatrics care, and pediatrics care.  
          </p>
        </div>
      </div>


    </div>
  );
}
