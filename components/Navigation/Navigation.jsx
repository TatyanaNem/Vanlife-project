import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = (props) => {
  let links = []
  if (props.names) links = Object.values(props.names)
  return (
    <nav className={styles.nav}>
      {links.map((name, index) => {
        return (
          <NavLink to={`${name}`} className={({isActive}) => isActive ? styles.active : styles.link} key={index}>{name.slice(0,1).toUpperCase() + name.slice(1)}</NavLink>
        )
      })}
    </nav>
  );
};

export default Navigation;
