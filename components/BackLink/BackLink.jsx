import React from 'react';
import {Link} from "react-router-dom";
import styles from './BackLink.module.css';

const BackLink = ({settings, type}) => {
  console.log(settings)
  return (
    <Link to={`..?${settings}`} relative="path" lassName={styles.backLink}>
      &larr; <span>Back to {type} vans</span>
    </Link>
  );
};

export default BackLink;
