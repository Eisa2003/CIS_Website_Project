import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import NewEventsCr from './components/NewEventsCr.jsx';
import Alerts from './components/Alerts.jsx';
import Carousel from './components/Carousel.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import ResourceCards from './components/ResourceCards/ResourceCards.jsx';
import SurveyPopup from './components/SurveyPopup.jsx';
import SurveyForm from './components/SurveyForm.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminNavbar from './components/AdminNavbar.jsx';
import AdminControls from './components/AdminControls.jsx';
import TokenContext from './components/TokenContext.js'; // establishing a reference to the context object
import HeroBanner from './components/HeroBanner.jsx';

function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false); // Using useState
  const [token, setToken] = useState(null); // Initial token state

  /* Survey popup open and close functions 
  const openSurvey = () => {
    setIsSurveyOpen(true);
  };
  */

  const closeSurvey = () => {
    setIsSurveyOpen(false);
  };

  // Timer-based effect to show survey popup after 10 mins
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic to show survey popup
      setIsSurveyOpen(true);
    }, 600000); // Show popup after 10 mins (10 * 60 * 1000 milliseconds)
    return () => clearTimeout(timer);
  }, []);


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
           
          <Alerts /> {/* I have noticed that because of this component, react is re-rendering the nav - Eisa */}
          <Navbar title="HC" />  
          <HeroBanner title="Welcome "/>   

          <div className="container">     
          <br/>
          
          <h1 className='text-center impTitles'>Hampton County</h1><br />
          <Carousel title="Hampton County Views"/>
          <br/>
          
              <h1 className='text-center impTitles'>Upcoming Events</h1><br />
              <NewEventsCr/>
          
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
          <HeroBanner title="Our Story"/>
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
          <HeroBanner title="Contact Us"/>
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
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='EmpAndEdu'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/MHealth&Abuse",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='MentalHAndSubAbuse'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Housing",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='Housing'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/FoodAsst",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='FoodAsst'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Util&BasicNeeds",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='UtilAndBasicNeeds'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Health",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='Health'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/LegalAid",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='LegalAid'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/CrisisHotlines",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='CrisisHotlines'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Trafficking",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='Trafficking'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Senior&Disab",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='SeniorAndDisab'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Resources/Other",
      element: (
        <>
          <Navbar title="HC" />
          <HeroBanner title="Crisis Hotlines" />
          <br />
          <ResourceCards resourceTitle='Other'/>
          <br />
          
          <Footer />
        </>
      )
    },

    {
      path: "/Admin/Access",
      element: (
        <>
          <AdminNavbar title="Admin Controls Login"/>
          <AdminLogin />
          <Footer />
        </>
      ),
    },

    {
      path: "/Admin/Access/Controls/Events",
      element: (
        <>
          <AdminNavbar title="Admin Controls Page"/>
          <AdminControls />
          <Footer />
        </>
      ),
    },

  ]);

  return (
    <TokenContext.Provider value={{ token, setToken }}> {/* The provider comp is what that
                                                            establishes the context tree and helps provide the value */}
      <RouterProvider router={router} />
      {/* Render SurveyPopup component */}
      {<SurveyPopup isOpen={isSurveyOpen} onClose={closeSurvey} />}
    </TokenContext.Provider>
  );
}

export default App;