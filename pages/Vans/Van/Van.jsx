import React from 'react';
import styles from './Van.module.css';
import classNames from "classnames";

const Van = ({van}) => {
  const typeClasses = classNames(styles.vanType, {
    [styles.simple]: van.type === 'simple',
    [styles.luxury]: van.type === 'luxury',
    [styles.rugged]: van.type === 'rugged'
  })
  return (
    <li className={styles.van}>
      <img src={van.imageUrl} alt={van.name}/>
      <div className={styles.vanDescription}>
        <span className={styles.vanName}>
          {van.name}
        </span>
        <span className={styles.vanPrice}>
          ${van.price}
        </span>
      </div>
      <span className={typeClasses}>
        {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
      </span>
    </li>
  );
};

export default Van;
