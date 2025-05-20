import styles from '../Styles/Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <h2>Subscribe And Get 20% Off Your First Purchase.</h2>
        <p>
          We believe that right stationary can transform your workspace and inspire productivity.
        </p>
        <div className={styles.form}>
          <input type="email" placeholder="Your email address" />
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;