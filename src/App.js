import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tours from './pages/Tours';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Tours></Tours>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
