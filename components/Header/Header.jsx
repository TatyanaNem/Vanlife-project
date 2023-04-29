import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css';
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const names = ['host', 'about', 'vans']

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to='/'>#VANLIFE</Link>
        <Navigation names={names} />
      </div>
    </header>
  );
};

export default Header;
