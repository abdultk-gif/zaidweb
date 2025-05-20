import styles from '../Styles/Featured.module.css';
import penHolder from '../assets/penholder.png';
import pencil from '../assets/mechpencil.png';
import magazine from '../assets/tjoy-magzine.png';
import stapler from '../assets/stapler.png';
import pens from '../assets/pens.png';
import geometry from '../assets/geo-box.png';

const Featured = () => {
  const featuredProducts = [
    {
      name: "KACO LEMO Pen Holder",
      image: penHolder,
      price: "$12.99"
    },
    {
      name: "BRUSTRO Mechanical Pencil",
      image: pencil,
      price: "$8.99"
    },
    {
      name: "TJOG Magazine file, dark grey",
      image: magazine,
      price: "$15.99"
    },
    {
      name: "Max Stapler Vimo 80 HD11UFL",
      image: stapler,
      price: "$22.99"
    },
    {
      name: "Uni-Ball Air Roller Ball Gel Ink Pens",
      image: pens,
      price: "$14.99"
    },
    {
      name: "Maped Metal Geometry Box",
      image: geometry,
      price: "$18.99"
    }
  ];

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        
        <div className={styles.productsGrid}>
          {featuredProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productImage}>
                <img 
                  src={product.image} 
                  alt={product.name}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;