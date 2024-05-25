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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;