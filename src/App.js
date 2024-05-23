import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Events from './components/Events';
import EventsCarousel from './components/EventsCarousel';
import Alerts from './components/Alerts.jsx';
import Carousel from './components/Carousel.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Alerts />
          <Navbar title="HC" />         
          <Carousel title="Hampton County Resources"/> 

          <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-center'>Upcoming Events</h1> <br/>
              <hr/>
              <EventsCarousel events={Events}/>
            </div>
          </div>
          <hr/>
          </div>

          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title=""/> 
          <h1>About Us</h1>
          <p> Thanks to funding from the Coastal Carolina Foundation, this online resource center was created by 
            Communities In Schools of South Carolina (CISSC) in conjunction with the University of South Carolina Beaufort (USCB) 
            to help the citizens of Hampton County identify and access needed services and resources.  This project was started by 
            the Hampton County Coalition, 
            and we would especially like to thank 
            Trina Williams with the New Life Center for her many hours of work compiling these resources.
            </p>
            <br />
            <p>We hope to continually update and improve this website and welcome your feedback as one way we will improve. 
            If you have any questions, have any suggestions, or know of a resource that we are missing on our website, 
            please contact helpinhamptoncounty@cisofsc.org.    
            </p>
            <br />

            <p>CISSC began serving Hampton County School district during the 2019-2020 school 
            year at what was then Wade Hampton High School and North District Middle School.  
            As of the 2023-2024 school year, CISSC expanded to Estill Elementary School and Estill Middle School, 
            and continued to serve both North District Middle School and the consolidated Hampton County High School.  
            You can find out more about the CISSC program here:  www.cisofsc.org.   
           </p>

          <EventsCarousel events={Events}/>
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;



/* -- Old home page
<Navbar title="HamptonCounty" /> Dynamic component, I can change the title as 
      I wish; possible due to props 

      <RouterProvider router={router} />

      <Alerts />
      <HeroBanner />

      
      <Carousel /> <br/><br/>

      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='text-center'>Upcoming Events</h1> <br/>
          <EventsCarousel events={Events}/>
        </div>
      </div>
      </div>

      <br />
      <Footer 
        companyName="CISSC"
        companyDescription="I'll write something over here afterwards."
        companyAddress="North Charleston, SC 29405, US"
        companyEmail="info@example.com"
        companyPhone="+ 01 234 567 88"
      />

*/
