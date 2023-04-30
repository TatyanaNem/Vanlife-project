import React from 'react';
import {Link} from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = () => {
  return (
    <Link to='' className={styles.backLink}>
      Back to all vans
    </Link>
  );
};

export default BackLink;
