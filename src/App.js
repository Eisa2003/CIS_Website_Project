//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() { 
  return (
    <Navbar title = "CISSC" /> // Dynamic component, I can change the title as 
                               // I wish; possible due to props
  );
} // end function App


export default App;
