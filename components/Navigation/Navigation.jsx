import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = (props) => {
  let links = []
  if (props.names) links = Object.values(props.names)
  return (
    <nav className={styles.nav}>
      {links.map((name, index) => {
        return (
          <Link to={`${name}`} className={styles.link} key={index}>{name.slice(0,1).toUpperCase() + name.slice(1)}</Link>
        )
      })}
    </nav>
  );
};

export default Navigation;
