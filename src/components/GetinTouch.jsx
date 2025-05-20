// components/LandingPage/LandingPage.jsx
import React from 'react';
import styles from '../Styles/GetinTouch.module.css';
import appMockup from '../assets/mobile.png'; // Import your app mockup image
import appStoreIcon from '../assets/Apple.png'; // Import app store icons
import playStoreIcon from '../assets/Google.png';
import fevicolLogo from '../assets/fevi.png'; // Import brand logos
import cellLogo from '../assets/cello.png';
import orpatLogo from '../assets/orpat.png';
import casioLogo from '../assets/para.png';
import camlinLogo from '../assets/cello.png';
import deliLogo from '../assets/para.png';
import natrajLogo from '../assets/fevi.png';

const GetinTouch = () => {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Unleash your Creativity with our diverse product range
            </h1>
            <p className={styles.heroSubtitle}>
              At Aliwala, we believe that right stationery can transform your workspace and inspire productivity.
            </p>
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeLink}>
                <img src={appStoreIcon} alt="App Store" className={styles.storeIcon} />
              </a>
              <a href="#" className={styles.storeLink}>
                <img src={playStoreIcon} alt="Google Play" className={styles.storeIcon} />
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={appMockup} alt="Aliwala App" className={styles.appMockup} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <path d="M5 16V8a7 7 0 0 1 14 0v8" />
                <path d="M3 16h18" />
                <path d="M19 16v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2" />
              </svg>
            </div>
            <div className={styles.featureText}>
              <h3>Fast Delivery</h3>
              <p>For all orders</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className={styles.featureText}>
              <h3>Safe Payments</h3>
              <p>100% secure payment</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className={styles.featureText}>
              <h3>Discount Coupons</h3>
              <p>Enjoy huge reductions</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className={styles.featureText}>
              <h3>Quality Support</h3>
              <p>24 hours x 7 days support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className={styles.brandsSection}>
        <div className={styles.brandsContent}>
          <div className={styles.brandsText}>
            <p className={styles.brandsCaption}>At Aliwala</p>
            <h2 className={styles.brandsTitle}>Select from the range of Best Brands!</h2>
            <p className={styles.brandsDescription}>
              Select from the various range of great brands of your linking. We offer you through a wide range of products from more than 300+ brands.
            </p>
            <a href="#" className={styles.findOutMore}>Find out more &gt;&gt;</a>
          </div>
          <div className={styles.brandsGrid}>
            <div className={styles.brandRow}>
              <div className={styles.brandItem}>
                <img src={camlinLogo} alt="Camlin" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={fevicolLogo} alt="Fevicol" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={casioLogo} alt="Casio" className={styles.brandLogo} />
              </div>
            </div>
            <div className={styles.brandRow}>
              <div className={styles.brandItem}>
                <img src={cellLogo} alt="Cello" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={orpatLogo} alt="Orpat" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={casioLogo} alt="Casio" className={styles.brandLogo} />
              </div>
            </div>
            <div className={styles.brandRow}>
              <div className={styles.brandItem}>
                <img src={natrajLogo} alt="Natraj" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={deliLogo} alt="Deli" className={styles.brandLogo} />
              </div>
              <div className={styles.brandItem}>
                <img src={natrajLogo} alt="Natraj" className={styles.brandLogo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetinTouch;