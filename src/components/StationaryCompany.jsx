import styles from '../Styles/StationaryCompany.module.css';
import image1 from '../assets/stationary1.png'
import image2 from '../assets/stationary2.png'

const StationaryCompany = () => {
  return (
    <section className={styles.stationaryCompany}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>The Stationary Company</h2>
          
          <div className={styles.grid}>
            <div className={styles.leftColumn}>
              <div className={styles.imageContainer}>
                <img
                  src={image2}
                  alt="Stationary notebooks"
                />
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={image1}
                  alt="Stationary products showcase"
                />
              </div>
            </div>
            
            <div className={styles.rightColumn}>
              <p className={styles.subtitle}>The Aliwala</p>
              <p className={styles.description}>
                Our Office Supplies Will Help You Organize Your Workspace From All Kinds Of Desk Essentials To Top Quality Staplers, Calculators And Organizers.
              </p>
              <button className={styles.ctaBtn}>Find out more &gt;&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationaryCompany;