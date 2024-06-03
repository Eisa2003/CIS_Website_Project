import React, { useState } from 'react'; 
import '../../style.css'; 

export default function SeniorAndDisab() {
  // Initialize state for card flipping
  const [isFlipped1, setIsFlipped1] = useState(false); 
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);


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

  return (
    <div className="card-resources">
      {/* Card 1- Lowcountry Council of Governments */}
      <div className={`card-container ${isFlipped1 ? 'flip' : ''}`} onClick={toggleCardFlip1}>
        <div className="cardR card-front">
          <h5>Lowcountry Council of Governments- Aging Services (60+ years of age)  </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> PO Box 98, 634 Campground Road Yemassee, SC 29945 <br />
            <strong>Phone:</strong> (843) 473-3991 <br />
            <strong>Website:</strong> <a href="https://www.lowcountrycog.org/aging_and_disability_resources/index.php" target="_blank" rel="noopener noreferrer">https://www.lowcountrycog.org/aging_and_disability_resources/index.php</a><br />
            <strong>Contact:</strong> Letisha N. Scotland, Aging Director <br />
            <strong>Email:</strong> <a href="mailto:lscotland@lowcountrycog.org">lscotland@lowcountrycog.org</a> <br />
          </p>
        </div>
      </div>

      {/* Card 2 - Services */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h5>Services </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Family Caregiver Support Program- </strong>The Family Caregiver Advocate provides support, 
                                                              information, education, and services to family 
                                                              caregivers to make this a rewarding experience.  <br />  
            <strong>Home and Community Based Services- </strong><br />                                      
            <ul>
              <li>
                The Service Coordination program consists of assessment team members that go into the community to conduct assessments to determine state funding eligibility for AAA programs. These services are contracted to local providers.
              </li>
              <li>
                The Consumer Choice Home Care Program offers homemaker and minimal personal care services to homebound seniors by contracting with local providers.
              </li>
              <li>
                The Nutrition Program offers Nutrition Education as well as a USDA approved noon time meal to individuals both homebound and those that attend locally contracted Senior Centers and Nutrition sites.
              </li>
            </ul>

          </p>
          
        </div>
      </div>

      {/* Card 3 - Services 2 */}
      <div className={`card-container ${isFlipped3 ? 'flip' : ''}`} onClick={toggleCardFlip3}>
        <div className="cardR card-front">
        <h5>Services </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>Information & Referral/ Assistance Services- </strong>TInformation, Referral and Assistance Program provides services as an access point for those seeking help. 
                                                                          Advocacy is provided for those who need help navigating the system to gain access to entitlement programs.  <br /><br />   
            <strong>Insurance Counseling- </strong> Insurance Counseling Assistance and Referral for Elders (I-CARE) is a federally funded insurance counseling program working under 
                                                          the guidance of the Centers for Medicare and Medicaid Services (CMS). ICARE assists all persons to understand what insurances they have and how to use the insurance in the most 
                                                          cost-effective way, as well to help prevent individuals from becoming victims of Insurance fraud and scam. <br /><br />       
            <strong>Legal Assistance- </strong>The Legal Assistance program assists individuals aged 60 and older to obtain legal services with a lawyer who can assist with their legal issues, at no cost to the senior. <br /> <br /> 
            <strong>The Service Coordination Program- </strong>Consists of assessment team members that go into the community to conduct assessments to determine LGOA funding eligibility for home delivered meals, home care, and coordination of services. These services are contracted to local providers.<br /> 

          </p>
          
        </div>
      </div>

      {/* Card 4 - TT&T Services */}
      <div className={`card-container ${isFlipped4 ? 'flip' : ''}`} onClick={toggleCardFlip4}>
        <div className="cardR card-front">
        <h5>Services </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>The Consumer Choice Home Care Program- </strong>Offers homemaker and minimal personal care services to homebound seniors.<br /><br />   
            <strong>Insurance Counseling- </strong> Insurance Counseling Assistance and Referral for Elders (I-CARE) is a federally funded insurance counseling program working under 
                                                          the guidance of the Centers for Medicare and Medicaid Services (CMS). ICARE assists all persons to understand what insurances they have and how to use the insurance in the most 
                                                          cost-effective way, as well to help prevent individuals from becoming victims of Insurance fraud and scam. <br /><br />       
            <strong>The Nutrition Program - </strong>Offers a USDA approved noon time meal to individuals both homebound and those that attend locally contracted Senior Centers and Nutrition sites.<br /> <br /> 

          </p>

        </div>
      </div>

      {/* Card 5 - TT&T Services */}
      <div className={`card-container ${isFlipped5 ? 'flip' : ''}`} onClick={toggleCardFlip5}>
        <div className="cardR card-front">
        <h5>Services </h5>
        </div>
        <div className="cardR card-back">
          <p>
            <strong>The Minor Home Repair and Safety Program- </strong>Developed to help homeowners sustain their efforts to care for themselves and/or a relative who resides in the home, by providing funds for the purchase of materials to assist in removing health and safety hazards and to provide nonstructural environmental modifications.<br /> 
            <p>The Minor Home Repair and Safety Program assists in making modifications to homes for safety and accessibility purposes to allow seniors to remain in their homes for as long as possible, avoiding long-term care facilities. The program accomplishes this by focusing its efforts on the following categories and items:</p>
            <ul>
              <li>Ingress/Egress (wheelchair ramps, handrails, stairs, etc.)</li>
              <li>Bathroom Safety (raise toilet seat, transfer bench, grab bars, etc.)</li>
              <li>Extreme Temperature Safety (window units)</li>
            </ul>
            The Minor Home Repair and Safety Program does not address major mechanical and structural repairs such as roofing, electrical, plumbing, or foundations. Cosmetic improvements are not eligible. The cost of labor is not an allowable expense of this program. For more information about this program, <strong>contact Takerroria Ariyibi at 843-473-3961.</strong>
          </p>

        </div>
      </div>

    </div>
  );
}
