import React from 'react';
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


function App() {
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
          <Footer />
        </>
      ),
    },

    {
      path: "/Emp&Edu",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Employment and Education" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/MHealth&Abuse",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Mental Health And Abuse" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Housing",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Housing" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/FoodAsst",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Food Assistance" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Util&BasicNeeds",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Utilities and Basic Needs" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Health",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Health" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/LegalAid",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Legal Aid" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/CrisisHotlines",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Crisis Hotlines" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Trafficking",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Trafficking , Abuse, & Violence Services" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Senior&Disab",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Senior And Disabilities" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    },

    {
      path: "/Other",
      element: (
        <>
          <Navbar title="HC" />
          <Carousel title="Other" />
          <br/>
          
          <br/>
          <Footer />
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;