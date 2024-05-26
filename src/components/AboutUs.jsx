import '../../src/style.css';
import React from 'react';

export default function AboutUs() {
  return (
    <div className='container'
         style={{
           backgroundColor: 'beige',
           color: 'black',
           padding: '20px'
         }}
    >
      <h2 style={{ fontFamily: 'Lucida Handwriting, cursive' }}>About Us</h2>
      <br />
      <p className="indented-paragraph"> 
        Thanks to funding from the Coastal Carolina Foundation, this online resource center was created by 
        Communities In Schools of South Carolina (CISSC) in conjunction with the University of South Carolina Beaufort (USCB) 
        to help the citizens of Hampton County identify and access needed services and resources.  This project was started by 
        the Hampton County Coalition, 
        and we would especially like to thank 
        Trina Williams with the New Life Center for her many hours of work compiling these resources.
      </p>
      
      <p className="indented-paragraph">
        We hope to continually update and improve this website and welcome your feedback as one way we will improve. 
        If you have any questions, have any suggestions, or know of a resource that we are missing on our website, 
        please contact <a href='mailto:helpinhamptoncounty@cisofsc.org'>helpinhamptoncounty@cisofsc.org.</a>  
      </p>
      
      <p className="indented-paragraph">
        CISSC began serving Hampton County School district during the 2019-2020 school 
        year at what was then Wade Hampton High School and North District Middle School.  
        As of the 2023-2024 school year, CISSC expanded to Estill Elementary School and Estill Middle School, 
        and continued to serve both North District Middle School and the consolidated Hampton County High School.  
        You can find out more about the CISSC program here:<a href='www.cisofsc.org'>  www.cisofsc.org.</a>   
      </p>
    </div>
  );
}
