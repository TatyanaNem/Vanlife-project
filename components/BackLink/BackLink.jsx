import React from 'react';
import {Link} from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = () => {
  return (
    <Link to='..' relative='path' className={styles.backLink}>
      Back to all vans
    </Link>
  );
};

export default BackLink;
