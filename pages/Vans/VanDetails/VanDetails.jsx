import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './VanDetails.module.css';
import classNames from "classnames";

const VanDetails = () => {
  const params = useParams()
  const [van, setVan] = useState({})
  const typeClasses = classNames(styles.vanType, {
    [styles.simple]: van.type === 'simple',
    [styles.luxury]: van.type === 'luxury',
    [styles.rugged]: van.type === 'rugged'
  })

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.vans)
        setVan(data.vans)
      })
  }, [params.id])


  return (
    <div className={styles.container}>
      {van ? (
        <div className={styles.vanDetail}>
          <img src={van.imageUrl} alt={van.name}/>
          <span className={typeClasses}>{van.type}</span>
          <h2>{van.name}</h2>
          <p className={styles.vanPrice}><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
          <button className={styles.linkButton}>Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  );
};

export default VanDetails;
