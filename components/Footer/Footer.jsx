import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>Ⓒ 2022 </span>
        <span>#VANLIFE</span>
      </div>
    </div>
  );
};

export default Footer;
