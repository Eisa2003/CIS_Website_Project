//import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Alerts from './components/Alerts';
//import Cards from './components/Cards';
import EventsCarousel from './components/EventsCarousel';

const events = [
  {
    title: 'Event 1',
    date: 'May 20, 2024',
    desc: 'Description of Event 1',
    address: '123 Main St, City, Country',
    imageUrl: 'https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80',
  },
  {
    title: 'Event 2',
    date: 'May 25, 2024',
    desc: 'Description of Event 2',
    address: '456 Elm St, City, Country',
    imageUrl: 'https://wallpapers.com/images/hd/one-piece-pictures-bjm9tdff9yzguoup.jpg',
  },
  // Add more events as needed
];

function App() { 
  return (
    <>
      <Navbar title="CISSC" /> {/* Dynamic component, I can change the title as 
      I wish; possible due to props */}

      <Alerts />
      <Carousel /> <br/>  <br/>


      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='text-center'>Upcoming Events</h1> <br/>
          <EventsCarousel events={events} />
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
