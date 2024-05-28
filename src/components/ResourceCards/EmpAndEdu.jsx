// Import React and useState hook
import React, { useState } from 'react'; 
import '../../style.css'; // Import your CSS file here

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
      {/* Card 1 */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="card card-front">
          <h5>Adult Education</h5>
        </div>
        <div className="card card-back">
          <p>
            <strong>Address:</strong> 303 1st St E, Hampton, SC 29924<br />
            <strong>Phone:</strong> (803) 903-1052<br />
            <strong>Contact:</strong> Diane Cuyler<br />
            <strong>Website:</strong> <a href="https://www.jcsd.net/apps/pages/JAHAAdultEducation" target="_blank">JAHA Adult Education</a>
          </p>
        </div>
      </div>

      {/* Card 2 - Avery C. Thompson, Sr. Community Center */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="card card-front">
          <h5>Avery C. Thompson, Sr. Community Center</h5>
        </div>
        <div className="card card-back">
          <p>
            <strong>Address:</strong> 63 East Palmetto Ave, 
                                      Post Office Box 601  
                                      Varnville, SC 29944  <br />
            <strong>Phone:</strong> 803-842-6316 <br />
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
        <div className="card card-front">
          <h5>Communities in Schools</h5>
        </div>
        <div className="card card-back">
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
        <div className="card card-front">
          <h5>First Steps</h5>
        </div>
        <div className="card card-back">
          <p>
            <strong>Address:</strong> 301 First Street East, Hampton, SC 29924<br />
            <strong>Phone:</strong> 803-943-7127<br />
            <strong>Contact:</strong> Dwanda Doctor, Executive Director<br />
            <strong>Website:</strong> <a href="https://hamptonfirststeps.org/" target="_blank">hamptonfirststeps.org</a><br />
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
        <div className="card card-front">
          <h5>Healthy Learners</h5>
        </div>
        <div className="card card-back">
          <p>
            <strong>Contact:</strong> Shelly Thomas, RN, ADN, Program Manager Lowcountry<br />
            <strong>Address:</strong> <br />
            <strong>Phone:</strong> (803) 584-8613 <br /> 
            <strong>Website:</strong> <a href="https://healthylearners.com/" target="_blank">https://healthylearners.com/</a><br />
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
        <div className="card card-front">
          <h5>Office of Student Services</h5>
        </div>
        <div className="card card-back">
          <p>
            <strong>Contact:</strong> Loretta Darien, Director<br />
            <strong>Address:</strong> <br />
            <strong>Phone:</strong> (803) 803-943-4576 <br /> 
            <strong>Email:</strong> <a href="mailto:LDarien@hcsdsc.org">LDarien@hcsdsc.org</a><br />
            <strong>Website:</strong> <a href="https://www.hampton2.k12.sc.us/departments/office_of_student_services" target="_blank">https://www.hampton2.k12.sc.us/departments/office_of_student_services</a><br />
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
        <div className="card card-front">
          <h5>SC Works</h5>
          <h7>WIOA Program</h7>
        </div>
          <div className="card card-back">
            <p>
            <strong>Contact:</strong> Shelia Bovain, Career Specialist <br />
            <strong>Address:</strong> 54 Tech Circle, Varnville, SC 29944 <br />
            <strong>Phone:</strong> (843) 226-9254  <br /> 
            <strong>Email:</strong> <a href="mailto:sbovain@rossworks.com">sbovain@rossworks.com</a><br />
            <strong>Website:</strong> <a href="https://www.lowcountrycog.org/workforce/our_services/index.php" target="_blank">https://www.lowcountrycog.org/workforce/our_services/index.php</a><br />
            <strong>Mission: </strong> The Workforce Innovation and Opportunity Act (WIOA) is designed to help jobseekers 
                                      access employment, education, training and support services to succeed in the labor market, 
                                       and to match employers with the skilled workers they need to compete in the global economy.  
            </p>
        </div>
    </div>


    {/* Card 8 - TT&T Services */}
    <div className={`card-container ${isFlipped8 ? 'flip' : ''}`} onClick={toggleCardFlip8}>
        <div className="card card-front">
          <h5>TT&T Services </h5>
        </div>
        <div className="card card-back">
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
