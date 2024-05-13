//import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() { 
  return (
    <>
      <Navbar title="CISSC" /> {/* Dynamic component, I can change the title as 
      I wish; possible due to props */}
      
      <Carousel />
      <br/><br/><br/><br/><br/><br/>

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
