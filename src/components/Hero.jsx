// components/Hero/Hero.jsx
import styles from '../Styles/Hero.module.css';
import heroBg from '../assets/herobg.jpg';
import playStoreIcon from '../assets/Google.png';
import appStoreIcon from '../assets/Apple.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.heroContent}>
        <h1>Unleash your Creativity with our diverse product range</h1>
        <div className={styles.storeButtons}>
          <a href="#" className={styles.storeLink}>
            <img src={appStoreIcon} alt="App Store" className={styles.storeIcon} />
          </a>
          <a href="#" className={styles.storeLink}>
            <img src={playStoreIcon} alt="Google Play" className={styles.storeIcon} />
          </a>
        </div>
        <div className={styles.pageDots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;