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
          <h3>Lowcountry Council of Governments- Aging Services (60+ years of age)  </h3>
          <img src="data:image/png;base64,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" 
          style={{ width: '150px', height: '150px' }} />

        </div>
        <div className="cardR card-back">
          <p>
            <strong>Address:</strong> PO Box 98, 634 Campground Road Yemassee, SC 29945 <br />
            <strong>Phone:</strong> <a href="tel:+8434733991">(843) 473-3991</a> <br />
            <strong>Website:</strong> <a class="linkweb" href="https://www.lowcountrycog.org/aging_and_disability_resources/index.php" target="_blank" rel="noopener noreferrer">www.lowcountrycog.org/aging_and_disability_resources</a><br />
            <strong>Contact:</strong> Letisha N. Scotland, Aging Director <br />
            <strong>Email:</strong> <a href="mailto:lscotland@lowcountrycog.org">lscotland@lowcountrycog.org</a> <br />
          </p>
        </div>
      </div>

      {/* Card 2 - Services */}
      <div className={`card-container ${isFlipped2 ? 'flip' : ''}`} onClick={toggleCardFlip2}>
        <div className="cardR card-front">
          <h3> <strong>Services:</strong><br /> -Family Caregiving Program  <br /> -Home and Community Based Services</h3>
          <h6>...tap for more</h6>
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
        <h3><strong>Services:</strong><br /> -Information & Referral <br />Insurance Counseling  <br /> -Legal Aid  <br /> -The Service Coordination Program </h3>
        <h6>...tap for more</h6>
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
        <h3> <strong>Services:</strong><br />  -The Consumer Choice Home Care Program  <br /> -Insurance Counseling <br /> -The Nutrition Program </h3>
        <h6>...tap for more</h6>
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
        <h3> <strong>Services:</strong><br /> -The Minor Home Repair and Safety Program</h3>
        <h6>...tap for more</h6>
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
            The Minor Home Repair and Safety Program does not address major mechanical and structural repairs 
            such as roofing, electrical, plumbing, or foundations. Cosmetic improvements are not eligible. 
            The cost of labor is not an allowable expense of this program. For more information about this program, 
            contact <strong>Takerroria Ariyibi</strong> at <a href="tel:+8434733961">(843) 473-3961</a>.
          </p>

        </div>
      </div>

    </div>
  );
}
