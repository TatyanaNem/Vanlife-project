import React from 'react';
import styles from './Loading.module.css';

const Loading = ({text}) => {
  return (
    <div className={styles.loading}>
      <h2>
        Loading {text ? text : ''}...
      </h2>
    </div>
  );
};

export default Loading;
