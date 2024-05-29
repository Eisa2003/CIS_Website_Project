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
