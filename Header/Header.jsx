import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link className={styles.logo} to='/'>#VANLIFE</Link>
        <nav className={styles.nav}>
          <Link to='/about' className={styles.link}>About</Link>
          <Link to='/vans' className={styles.link}>Vans</Link>
        </nav>
    </header>
  );
};

export default Header;
