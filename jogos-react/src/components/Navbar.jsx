// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
       <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Iara Games
      </Link>
      <div className={styles.links}>
        <Link to="/">Store</Link>
      </div>
    </nav>
      {/* Subnav */}
      <nav id="subnav" className={styles.subnav}>
        <a 
          href="../pages/store.html" 
          className={`${styles.subLink} ${location.pathname.includes('store') ? styles.active + ' ' + styles.textRosa : ''}`}
        >
          Descobrir
        </a>
      <Link
        to="/"
        className={`${styles.subLink} ${styles.textBranca} ${
          location.pathname === '/' ? `${styles.active} ${styles.textRosa}` : ''
        }`}
      >
        Navegar
      </Link>
      </nav>
    </>
  );
};

export default Navbar;