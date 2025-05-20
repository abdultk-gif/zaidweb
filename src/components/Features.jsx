import styles from '../Styles/Features.module.css';

const Features = () => {
    const features = [
      {
        icon: '🚚',
        title: "Fast Delivery",
        description: "For all orders"
      },
      {
        icon: '🔒',
        title: "Safe Payments",
        description: "100% secure"
      },
      {
        icon: '🎫',
        title: "Discount Coupons",
        description: "Enjoy Huge Promotions"
      },
      {
        icon: '🛎️',
        title: "Quality Support",
        description: "Dedicated 24/7 support"
      }
    ];
  
    return (
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.icon}>{feature.icon}</div>
                <div className={styles.textContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default Features;