// components/Header/Header.jsx
import { useState } from 'react';
import styles from '../Styles/Header.module.css';
import logo from '../assets/Logo.png'; // Import your logo image
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Link to="/"> {/* Wrap the logo with Link */}
          <img 
            src={logo} 
            alt="Aliwala Logo" 
            className={styles.logo}
            style={{ height: '40px', width: 'auto' }}
          />
        </Link>
      </div>
      
      <div className={styles.desktopContact}>
        <Link to='/getintouch'>
        
        <button className={styles.contactBtn}> 
          Get in touch
          <span className={styles.arrow}>&#8594;</span>
        </button>
        </Link>
        
      </div>
      
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <nav>
          <ul>
           <Link to='/'><li><a href="#home">Home</a></li></Link>
           <Link to='/about'><li><a href="#about">About Us</a></li></Link>
           <Link to='/contact'><li><a href="#contact">Contact Us</a></li></Link>
           <Link to='/faq'><li><a href="#faq">FAQ</a></li></Link>
          </ul>
          <Link to='/getintouch'>
          
          <button className={styles.mobileContactBtn}>Get in touch</button>

          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;