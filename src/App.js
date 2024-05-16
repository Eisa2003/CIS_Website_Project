//import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Alerts from './components/Alerts';
import Events from './components/Events';
//import Cards from './components/Cards';
import EventsCarousel from './components/EventsCarousel';
import HeroBanner from './components/HeroBanner';

function App() { 
  return (
    <>
      <Navbar title="HamptonCounty" /> {/* Dynamic component, I can change the title as 
      I wish; possible due to props */}

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
    </>
  );
} // end function App


export default App;
