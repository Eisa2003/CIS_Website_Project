//import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() { 
  return (
    <>
      <Navbar title="CISSC" /> {/* Dynamic component, I can change the title as 
      I wish; possible due to props */}
      <Carousel />
      
    </>
  );
} // end function App


export default App;
