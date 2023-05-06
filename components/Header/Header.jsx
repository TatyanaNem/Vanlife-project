import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css';
import userIcon from '../../assets/userIcon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to='/'>#VANLIFE</Link>
        <nav className={styles.headerNavigation}>
          <NavLink
            to="host"
            className={({isActive}) => isActive ? styles.active : styles.link}
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            className={({isActive}) => isActive ? styles.active : styles.link}
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className={({isActive}) => isActive ? styles.active : styles.link}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <img
              src={userIcon}
              alt='user icon'
              className={styles.loginIcon}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
