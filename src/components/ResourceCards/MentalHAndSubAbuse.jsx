import React, { useState } from 'react'; 
import '../../style.css'; 

export default function MentalHAndSubAbuse() {
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

  return (
    <div className="card-resources">
      {/* Card 1- New Life Center */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>New Life Center</h5>
          <img src="data:image/jpeg;base64,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" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 102 Ginn Altman Ave #3, Hampton, SC  29924 <br />
            <strong>Phone:</strong> (803) 943-2800 <br />
            <strong>Contact:</strong> Estelle Rivers, Executive Director <br />
            <strong>Website:</strong> <a href="http://newlifecenteradc.org" target="_blank" rel="noopener noreferrer">http://newlifecenteradc.org</a><br />
            <strong>Services: </strong>
            <ul>
              <li><strong>ADSAP Program:</strong> Deals with the issue of substance use and driving.  It is mandatory in South Carolina to attend if you are convicted of DUI. 
                                                  Each client is individually assessed and receives education or an appropriate level of treatment to address the risk of an additional DUI.</li>
              <li><strong>Outpatient Services:</strong> Provides individual, family, or group counseling for persons suffering from addiction and/or abuse involving alcohol or other drugs.</li>
              <li><strong>Youth and Adolescent Services:</strong> Designed to educate youth ages 13 – 17 who are either abusing alcohol and other drugs or demonstrating behavior patterns that may 
                                                                  put them at risk for substance use.</li>
              <li><strong>Prevention Program:</strong> Designed to educate the public of the complex nature of addiction. Prevention conducts workshops on such issues as drug abuse, tobacco abuse, 
                                                        alcohol abuse, fetal alcohol syndrome, addiction, and stress management.</li>
              <li><strong>Peer Support:</strong> An individualized, recovery-focused service that allows individuals the opportunity to learn to manage their own recovery and advocacy process.</li>
            </ul>

          </p>
        </div>
      </div>

      {/* Card 2 - Hampton Alcoholics Anonymous */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Hampton Alcoholics Anonymous</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM6zArqSPNhpUz9wkxsaqgY1i1DhTFWdd1Q&s" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>All Saints Episcopal Church- </strong>Parish Hall<br />
            <strong>Address:</strong> 511 Jackson Ave. E.
                                      Hampton, SC 29924<br />
            <strong>Hours of Operation: </strong>
            <ul>
              <li>Tuesdays and Thursdays</li>
              <li>7pm-8pm</li>
            </ul>
          </p>
          
        </div>
      </div>

      {/* Card 3 - InnerPeace Counseling Services, LLC */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
          <h5>InnerPeace Counseling Services, LLC</h5>
          <img src="https://img.mailinblue.com/5531405/images/rnb/original/63b4ce3332f82e63437df998.png" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
            <strong>Address:</strong> 61 Hickory Hill Rd Varnville, SC 29944 <br />
            <strong>Phone:</strong> (803) 730-2783 <br />
            <strong>Contact:</strong> Amber Allen, LPC Supervisor<br />
            <strong>Email:</strong> <a href="mailto:amber.allen@innerpeacecounselingsc.com">amber.allen@innerpeacecounselingsc.com</a><br />
            <strong>Services: </strong>
            <div class="two-column-list">
            <ul>
              <li>Individual Therapy</li>
              <li>Family Therapy</li>
              <li>Group Therapy</li>
              <li>Child or Adolescent Therapy</li>
              <li>Children’s Trauma</li>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Women’s Issues</li>
              <li>ADHD</li>
              <li>Anger Management</li>
              <li>Behavioral Issues</li>
              <li>Coping Skills</li>
              <li>Oppositional Defiance</li>
              <li>Parenting</li>
              <li>Relationship Issues</li>
              <li>School Issues</li>
              <li>Self-esteem issues/ low self-esteem</li>
              <li>Stress</li>
              <li>Trauma and PTSD</li>
            </ul>
          </div>
        </p>

        </div>
      </div>

      {/* Card 4 - Wright Directions*/}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
          <h5>Wright Directions</h5>
          <img src="https://img.ecatholic.com/29094/pictures/2021/5/WRIGHT%20DIRECTIONS%20MASTER%20LOGO%20W-02.png?t=1621351778000" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> 304 Lee Avenue Hampton, SC 29924 <br />
            <strong>Phone:</strong> (803)943-9431 <br />
            <strong>Contact:</strong> Matthew Lurey, Hampton Branch Manager<br />
            <strong>Website:</strong> <a href="https://wrightdfs.com" target="_blank" rel="noopener noreferrer">https://wrightdfs.com</a><br />
            <strong>Email:</strong> <a href="mailto:ddoctor@hamptonfirststeps.org">ddoctor@hamptonfirststeps.org</a><br />
            <strong>Services: </strong>
            <ul>
              <li>Autism</li>
              <li>ADHD</li>
              <li>Learning disabilities</li>
              <li>Behavior Modification</li>
              <li>Psychosocial Rehabilitation</li>
              <li>Batterers Intervention</li>
              <li>Anger Management</li>
              <li>Counseling</li>
            </ul>
          </p>

        </div>
      </div>

      {/* Card 5 - Fight 2 Survive, LLC*/}
      <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
        <div className="cardR card-front">
          <h5>Fight 2 Survive, LLC</h5>
          <img src="https://www.bannerhealth.com/healthcareblog/-/media/images/project/healthcareblog/hero-images/2022/05/how-to-tell-if-therapy-is-working.ashx" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
          <p>           
            <strong>Address:</strong> P.O. Box 1434 Estill, SC 29918 <br />
            <strong>Contact:</strong> Latasha Maxwell, LPN<br />
            <strong>Phone:</strong> (803) 942-3401  <br /> 
            <strong>Email:</strong> <a href="mailto:Fight2survivellc@gmail.com">Fight2survivellc@gmail.com</a><br />
            <strong>Mission: </strong> To equip, support, and elevate others with the tools and resources to improve the quality of life.
          </p>

        </div>
      </div>


      {/* Card 6 - Hope Connects */}
      <div className={`card-container ${isFlipped6 ? 'flip' : ''}`} onClick={toggleCardFlip6}>
        <div className="cardR card-front">
          <h5>Hope Connects</h5>
          <img src="https://childadvocate.sc.gov/sites/scdca/files/Documents/Images/Ca%20logo%20revised.png" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <div class="indented-paragraphs">
          <p >No matter how challenging the times are, you are not alone in South Carolina. The South Carolina Department of Mental Health (SCDMH) and the South Carolina Department 
              of Alcohol and Other Drug Abuse Services (DAODAS) have teamed up to offer this safe and easy service that allows you to anonymously take a Self-Check Questionnaire and 
              connect with a professional counselor who can offer guidance, support, and resources to help connect you with mental health and addiction services. If you are a parent 
              or guardian looking to take a Questionnaire to connect with a counselor on behalf of your child, please visit <a href="https://hope.connectsSCkids.org">hope.connectsSCkids.org</a>.</p>

          <p>Using this service is completely voluntary and confidential. This is not an emergency response system or crisis intervention service. 
             If you are in crisis or contemplating suicide, please call or text 988 or chat <a href="https://988lifeline.org">988lifeline.org</a>. 
             You can also reach SCDMH's mobile crisis line at 1-833-364-2274.</p>

          <p>SC Hopes support line at 1-844-724-6737 to connect with an experienced mental health and addiction counselor 24/7.</p>
        </div>

        </div>
      </div>

    {/* Card 7 - Coastal Empire Mental Health*/}
    <div className={`card-container ${isFlipped7 ? 'flip' : ''}`} onClick={toggleCardFlip7}>
        <div className="cardR card-front">
          <h5>Coastal Empire Mental Health</h5>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XpOh4VNz6AZgb82i3azJX2R-Mfse4UOyuA&s" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
          <div className="cardR card-back">
          <p>
                <strong>Address:</strong> 65 Forest Drive Varnville, SC 29944  <br />
                <strong>Contact:</strong> Yokina Williams, Hampton and Allendale Clinic Director<br /> 
                <strong>Phone:</strong> (803) 943-2828 <br /> 
                <strong>Email:</strong> <a href="mailto:yokina.williams@scdmh.org"> yokina.williams@scdmh.org</a><br />
                <strong>Services: </strong><br /> 
                <ul>
                  <li>Anxiety</li>
                  <li>Attention Deficit Disorder</li>
                  <li>Behavioral Problems</li>
                  <li>Depression</li>
                  <li>Oppositional Defiant Disorder (ODD)</li>
                  <li>Suicide Risk</li>
                  <li>Thought Disorders</li>
                  <li>Trauma Focused-Cognitive Behavioral Therapy (TF-CBT)</li>
                  <li>Dialectical Behavioral Therapy (DBT)</li>
                  <li>Motivational Interviewing</li>
                  <li>Trauma Focused</li>
                </ul>  
            </p>


        </div>
    </div>

    {/* Card 8 - One Step At A Time*/}
        <div className={`card-container ${isFlipped8 ? 'flip' : ''}`} onClick={toggleCardFlip8}>
            <div className="cardR card-front">
              <h5>One Step At A Time</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo9eImbpK2Nb01G_YG_TpyBGeu38jYGREqA&s" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="cardR card-back">
            <p>
                <strong>Address:</strong> 168 14th Street Fairfax, SC 29827 <br />
                <strong>Contact:</strong> Sandra Washington-Bennett, MA, LPC-A, Owner<br /> 
                <strong>Phone:</strong> (843) 301-3470<br /> 
                <strong>Email:</strong> <a href="mailto:swb.onestep23@gmail.com"> swb.onestep23@gmail.com</a><br />
                <strong>Services: </strong><br /> 
                <ul>
                  <li>Financial Consulting</li>
                  <li>Balancing Academic Achievement</li>
                  <li>Motivational Speaking</li>
                  <li>Nutrition Education</li>
                  <li>Job Skills</li>
                  <li>Resume Writing</li>
                  <li>Notary</li>
                  <li>Parenting Skills</li>
                  <li>Prison Reform</li>
                  <li>Available for Hampton County residents</li>
                </ul>
            </p>

            </div>
          </div>

    {/* Card 9 - Celebrate Recovery*/}
    <div className={`card-container ${isFlipped9 ? 'flip' : ''}`} onClick={toggleCardFlip9}>
        <div className="cardR card-front">
          <h5>Celebrate Recovery</h5>
          <img src="https://i0.wp.com/lhchampton.com/wp-content/uploads/2021/05/cr1.jpg?w=500&ssl=1" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
            <strong>Address:</strong> 2435 Augusta Hwy Hampton, SC 29924 <br />
            <strong>Phone:</strong> (843) 301-3470<br /> 
            <strong>Website:</strong> <a href="https://lhchampton.com/celebrate-recovery-hampton/" target="_blank" rel="noopener noreferrer">https://lhchampton.com/celebrate-recovery-hampton/</a><br />
            <strong>Mission: </strong> Celebrate Recovery is a Christ centered recovery program based on eight spiritual principles from the Beatitudes and the 12 Steps. Anyone and everyone who struggles 
                                     with a hurt, habit, or hang-up of any kind is welcome to attend. <br /> 
            <ul>
              <li>Every Sunday</li>
              <li>5:15pm Meal in the small building</li>
              <li>6:00-8:00pm Large Group Meeting followed by recovery specific Share Groups in the large building</li>
              <li>Childcare provided</li>
            </ul>   
            </p>

        </div>
      </div>
    
    {/* Card 10 - Life Recovery Varnville*/}
    <div className={`card-container ${isFlipped10 ? 'flip' : ''}`} onClick={toggleCardFlip10}>
        <div className="cardR card-front">
          <h5>Life Recovery Varnville</h5>
        </div>
        <div className="cardR card-back">
        <p>
            <strong>Address:</strong> 165 E. Palmetto Ave. Varnville, SC 29924 <br />
            <strong>Mission: </strong> The Twelve Steps of Life Recovery are a set of biblical principles that outline a course of action for tackling problems such as anxiety, 
                                       depression, grief, people pleasing, drug and alcohol addiction, overeating, sex addiction, and More. Life Recovery is for EVERYONE no matter their struggle.
                                       Anyone who struggles with emotional issues, life issues, and other dependencies are welcome to attend.<br /> 
            <ul>
              <li>Every Sunday 5:30-8:00 </li>
              <li>Free childcare provided</li>
            </ul>   
            </p>

        </div>
      </div>

      {/* Card 11 - Lowcountry Hope House*/}
    <div className={`card-container ${isFlipped11 ? 'flip' : ''}`} onClick={toggleCardFlip11}>
        <div className="cardR card-front">
          <h5>Lowcountry Hope House</h5>
          <img src="https://static.wixstatic.com/media/8a8ebc_c094aab595894469a692c5869f811e4e~mv2.png/v1/fit/w_2500,h_1330,al_c/8a8ebc_c094aab595894469a692c5869f811e4e~mv2.png" alt="Card 1 Image" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="cardR card-back">
        <p>
            <strong>PO Box Address:</strong> PO Box 4449 Beaufort, S.C 29903  <br />
            <strong>Website:</strong> <a href="https://www.lowcountryhh.com/" target="_blank" rel="noopener noreferrer">https://www.lowcountryhh.com/</a><br />
            <strong>Mission: </strong> LCHH provides residences for men and women over the age of 18 who are recovering from alcohol and/or drug addiction. 
                                       For more information or to schedule an "intake interview" please contact us between the hours of 8 a.m. - 8 p.m., at the numbers below. <br /> 
            <ul>
              <li><strong>Stephanie N.: </strong> (843) 298-3504</li>
              <li><strong>Holly P.: </strong> (843) 575-5737</li>
            </ul>  
            </p>

        </div>
      </div>

    </div>
  );
}
