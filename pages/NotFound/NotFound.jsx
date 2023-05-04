import React from 'react';
import {Link} from "react-router-dom";
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>The page you were looking for is not found. </h1>
      <Link to='/' className={styles.backHomeLink}>Return to home</Link>
    </div>
  );
};

export default NotFound;
