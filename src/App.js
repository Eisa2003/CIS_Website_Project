import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Events from './components/Events';
import EventsCarousel from './components/EventsCarousel';
import Alerts from './components/Alerts.jsx';
import Carousel from './components/Carousel.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import EmpAndEdu from './components/ResourceCards/EmpAndEdu.jsx';
import MentalHAndSubAbuse from './components/ResourceCards/MentalHAndSubAbuse.jsx';
import Housing from './components/ResourceCards/Housing.jsx';
import FoodAsst from './components/ResourceCards/FoodAsst.jsx';
import UtilAndBasicNeeds from './components/ResourceCards/UtilAndBasicNeeds.jsx';
import Health from './components/ResourceCards/Health.jsx';
import LegalAid from './components/ResourceCards/LegalAid.jsx';
import CrisisHotlines from './components/ResourceCards/CrisisHotlines.jsx';
import Trafficking from './components/ResourceCards/Trafficking.jsx';
import SeniorAndDiasb from './components/ResourceCards/SeniorAndDisab.jsx';
import Other from './components/ResourceCards/Other.jsx';
import SurveyPopup from './components/SurveyPopup.jsx';
import SurveyForm from './components/SurveyForm.jsx';


function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false); // Use useState

  /* Survey popup open and close functions 
  const openSurvey = () => {
    setIsSurveyOpen(true);
  };
  */

  const closeSurvey = () => {
    setIsSurveyOpen(false);
  };

  // Timer-based effect to show survey popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic to show survey popup
      setIsSurveyOpen(true);
    }, 1000); // Show popup after 80 seconds
    return () => clearTimeout(timer);
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
           
          <Alerts />
          <Navbar title="HC" />          
          <Carousel title="Hampton County Resources"/>

         
          <br/>

          <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-center'>Upcoming Events</h1>
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
          <Carousel title="Our Story"/>
          <br/>
          <AboutUs />
          <br/>
          <Footer />
        </>
      ),
    },

    {
      path: "/ContactUs",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Contact Us"/>
          <br/>
          <ContactUs />
          <br/>
          <SurveyForm />
          <br/>
          <Footer />
        </>
      ),
    },

    {
      path: "/Resources/Emp&Edu",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Employment & Education" />
          <EmpAndEdu />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/MHealth&Abuse",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Mental Health & Substance Abuse" />
          <MentalHAndSubAbuse />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Housing",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Housing" />
          <Housing />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/FoodAsst",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Food Assistance" />
          <FoodAsst />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Util&BasicNeeds",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Utilities & Basic Needs" />
          <UtilAndBasicNeeds />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Health",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Health" />
          <Health />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/LegalAid",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Legal Aid" />
          <LegalAid />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/CrisisHotlines",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Crisis Hotlines" />
          <CrisisHotlines />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Trafficking",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Trafficking , Abuse, & Violence Services" />
          <Trafficking />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Senior&Disab",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Senior & Disabilities" />
          <SeniorAndDiasb />
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Other",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Other" />
          <Other />
          <Footer />
        </>
      )
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* Render SurveyPopup component */}
      <SurveyPopup isOpen={isSurveyOpen} onClose={closeSurvey} />
    </>
  );
}

export default App;