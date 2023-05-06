import React from 'react';
import {Link} from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = ({settings, type}) => {
  return (
    <Link to={`..?${settings}`} relative="path" lassName={styles.backLink}>
      &larr; <span className={styles.backLinkText}>Back to {type} vans</span>
    </Link>
  );
};

export default BackLink;
