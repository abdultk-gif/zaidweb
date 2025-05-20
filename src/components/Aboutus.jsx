import React from 'react';
import styles from '../Styles/Aboutus.module.css';



const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroImageContainer}>
            <img 
              src="/api/placeholder/500/400" 
              alt="Office desk with notebook, plant, and stationery" 
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroText}>
            <span className={styles.tagline}>The About Us</span>
            <h1 className={styles.mainHeading}>Everyone deserves better!</h1>
            <p className={styles.heroParagraph}>
              Our Office Supplies Will Help You Organize Your Workspace Floor And Spark Of Good Energy In Your Employees, Executives, Calculators And Designers.
            </p>
            <button className={styles.shopButton}>Shop now →</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Fast Delivery</h3>
            <p>Within 24 hours</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon}>
                <path d="M20 7h-8.586L9.707 5.293A1 1 0 0 0 9 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Safe Payments</h3>
            <p>100% secure checkout</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon}>
                <path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h7M16 3h5v5M21 3l-9 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Discount Coupons</h3>
            <p>On many registrations</p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon}>
                <path d="M18 20V10M12 20V4M6 20v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Quality Support</h3>
            <p>Dedicated 24/7 support</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainContentSection}>
        <h2 className={styles.sectionHeading}>With The Right Tools, Resources And Inspiration</h2>
        <p className={styles.sectionContent}>
          Already leaders in the field in everything we do, the support we provide can help and educate you.
          We are driven to support you by optimizing what you need on your journey to become the best.
        </p>
        
        {/* Grid of Images */}
        <div className={styles.imageGrid}>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Office supplies" className={styles.gridImage} />
            <p>Supplies</p>
          </div>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Workspace design" className={styles.gridImage} />
            <p>Workspace</p>
          </div>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Stationery items" className={styles.gridImage} />
            <p>Stationery</p>
          </div>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Paper products" className={styles.gridImage} />
            <p>Paper Products</p>
          </div>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Technology" className={styles.gridImage} />
            <p>Technology</p>
          </div>
          <div className={styles.gridItem}>
            <img src="/api/placeholder/300/200" alt="Services" className={styles.gridImage} />
            <p>Services</p>
          </div>
        </div>
      </section>
    </div>
  );

};

export default AboutUs;