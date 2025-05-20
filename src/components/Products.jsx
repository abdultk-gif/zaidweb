import styles from '../Styles/Products.module.css';
import homeOffice from '../assets/desk.png';
import notebooks from '../assets/Notebook.png';
import pens from '../assets/pens.png';
import tape from '../assets/tape.png';

const Products = () => {
  const categories = [
    { 
      name: "Home Office desks", 
      image: homeOffice,
    },
    { 
      name: "Notebooks", 
      image: notebooks,
    },
    { 
      name: "Pens", 
      image: pens,
    },
    { 
      name: "Tape", 
      image: tape,
    }
  ];

  return (
    <section className={styles.products}>
      <div className={styles.productGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.productCard}>
            <img src={categories[0].image} alt={categories[0].name} />
            <div className={styles.overlay}>
              <h3>{categories[0].name}</h3>
              <button className={styles.shopButton}>Shop now &gt;&gt;</button>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.topRow}>
            <div className={styles.productCard}>
              <img src={categories[1].image} alt={categories[1].name} />
              <div className={styles.overlay}>
                <h3>{categories[1].name}</h3>
                <button className={styles.shopButton}>Shop now &gt;&gt;</button>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src={categories[2].image} alt={categories[2].name} />
              <div className={styles.overlay}>
                <h3>{categories[2].name}</h3>
                <button className={styles.shopButton}>Shop now &gt;&gt;</button>
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.productCard}>
              <img src={categories[3].image} alt={categories[3].name} />
              <div className={styles.overlay}>
                <h3>{categories[3].name}</h3>
                <button className={styles.shopButton}>Shop now &gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;