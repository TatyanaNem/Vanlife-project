import React from 'react';
import classNames from "classnames";
import styles from'./TypeButton.module.css';

const TypeButton = ({typeName}) => {
  const typeClasses = classNames(styles.vanType, {
    [styles.simple]: typeName === 'simple',
    [styles.luxury]: typeName === 'luxury',
    [styles.rugged]: typeName === 'rugged'
  })

  return <span className={typeClasses}>{typeName}</span>
};

export default TypeButton;
