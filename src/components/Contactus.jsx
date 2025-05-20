import React from 'react';
import styles from '../Styles/ContactUs.module.css';

const Contactus = () => {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactSection}>
        <h1 className={styles.mainHeading}>Do you Have any Questions?</h1>
        <p className={styles.subHeading}>We are at your disposal 7 days a week!</p>
        
        <div className={styles.contactInfo}>
          <p>+91 82903 92786</p>
          <p>care@aliwala.in</p>
        </div>
      </section>

      <section className={styles.locationSection}>
        <h2 className={styles.sectionHeading}>Our Location</h2>
        <p className={styles.locationText}>Welcome to LinkedIn!</p>
        <ul className={styles.locationList}>
          <li>Visit Facebook.com.</li>
          <li>GET IT UP, YOU WANT TO</li>
          <li>WATCH ME</li>
        </ul>
      </section>

      <section className={styles.contactFormSection}>
        <h2 className={styles.sectionHeading}>Drop Us A Line</h2>
        <p className={styles.formDescription}>
          Have a question or comment? Use the form below to send us a message or contact us by mail at.
        </p>
        
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Your name?</label>
              <input type="text" />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address?</label>
              <input type="email" />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>Subject</label>
            <input type="text" />
          </div>
          
          <div className={styles.formGroup}>
            <label>Your message:</label>
            <textarea rows="5"></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Submit →
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contactus;