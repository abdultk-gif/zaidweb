import { useState, useEffect } from 'react'; // Added useEffect import
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Featured from './components/Featured';
import DealOfTheDay from './components/DealOfTheDay';
import StationaryCompany from './components/StationaryCompany';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import GetinTouch from './components/GetinTouch';
import './Styles/App.module.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main>
          <Routes>
            <Route index element={ // Using 'index' instead of path="/"
              <>
                <Hero />
                <Features />
                <Products />
                <Featured />
                <DealOfTheDay />
                <StationaryCompany />
                <Testimonials />
              </>
            } />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="getintouch" element={<GetinTouch />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;