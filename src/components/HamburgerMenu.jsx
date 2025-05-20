import styles from '../Styles/HamburgerMenu.module.css';

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className={styles.contactBtn}>Get in Touch</button>
        </nav>
      </div>
    );
  };
export default HamburgerMenu;