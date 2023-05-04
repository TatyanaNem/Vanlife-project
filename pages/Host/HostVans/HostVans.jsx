import React, {useEffect, useState} from 'react';
import styles from './HostVans.module.css';
import {Link} from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const hostVansElements = vans.map(van => {
    return <li key={van.id}>
      <Link to={van.id} className={styles.item}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
        <div className={styles.description}>
          <p className={styles.name}>{van.name}</p>
          <p className={styles.price}>${van.price}/day</p>
        </div>
      </Link>
    </li>
  })

  return (
    <>
      <h3>Your listed vans</h3>

      {
          vans.length > 0
            ? <ul className={styles.list}>
                {hostVansElements}
              </ul>
            : (<h2>Loading...</h2>)
        }
    </>

  );
};

export default HostVans;
