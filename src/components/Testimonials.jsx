// Testimonials.jsx
import React from 'react';
import styles from '../Styles/Testimonials.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      {/* Top header with CTA */}
      <div className={styles.headerCta}>
        <h3 className={styles.ctaHeading}>
          Are you in the stationery game as a wholesaler or retailer?
        </h3>
        <button className={styles.contactButton}>
          Contact Us
        </button>
      </div>

      {/* Main content area */}
      <div className={styles.mainContent}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>
            What Our<br />Customers say
          </h2>
          <p className={styles.description}>
            Read the testimonials by our<br />customers to find out more<br />about us
          </p>
        </div>

        {/* Right column with testimonials */}
        <div className={styles.rightColumn}>
          {/* Background element */}
          <div className={styles.backgroundElement}></div>
          
          {/* First testimonial */}
          <div className={styles.testimonial}>
            <div className={styles.testimonialHeader}>
              <div className={styles.avatar}></div>
              <div>
                <h4 className={styles.name}>Andrew Williams,</h4>
                <p className={styles.company}>Big Tech Company</p>
              </div>
            </div>
            <p className={styles.testimonialText}>
              From 100% customizability to event marketing tools all in one place plus superb 
              customer success, the bar has been set quite high.
            </p>
            
            {/* Quote icon */}
            <div className={styles.quoteIcon}>
              <span>"</span>
            </div>
          </div>

          {/* Second testimonial */}
          <div className={`${styles.testimonial} ${styles.secondTestimonial}`}>
            <div className={styles.testimonialHeader}>
              <div className={styles.avatar}></div>
              <div>
                <h4 className={styles.name}>Peter Morris</h4>
                <p className={styles.company}>Rocketlane</p>
              </div>
            </div>
            <p className={styles.testimonialText}>
              The customizable experience and networking features makes this platform engaging and 
              interactive making it an excellent platform for networking events and conferences.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className={styles.navigationButtons}>
            <button className={styles.navButton}>
              <ArrowLeft size={20} />
            </button>
            <button className={`${styles.navButton} ${styles.navButtonActive}`}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;