// components/DealOfTheDay/DealOfTheDay.jsx
import { useState, useEffect } from 'react';
import styles from '../Styles/DealOfTheDay.module.css';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 58,
    seconds: 16
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = {...prevTime};
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              // Reset when time runs out
              newTime.hours = 23;
              newTime.minutes = 59;
              newTime.seconds = 59;
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.dealOfTheDay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.tag}>Limited Quantities</p>
          <h2 className={styles.title}>Deal of the Day</h2>
          <p className={styles.subtitle}>Give thanks to the most high</p>
          
          <div className={styles.timer}>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className={styles.timeLabel}>Hours</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className={styles.timeLabel}>Minutes</span>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className={styles.timeLabel}>Seconds</span>
            </div>
          </div>
          
          <button className={styles.shopBtn}>Shop now &gt;&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;