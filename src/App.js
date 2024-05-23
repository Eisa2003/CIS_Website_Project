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
          <Navbar title="HC" />
          <Alerts />
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
          <Carousel title="About Page"/> 
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
