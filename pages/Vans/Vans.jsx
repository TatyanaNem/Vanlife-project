import React, {useEffect, useState} from 'react';
import styles from './Vans.module.css';
import Van from "./Van/Van";

const Vans = () => {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => {
        console.log(data.vans)
        setVans(data.vans)
      })
  }, [])
  return (
    <div className={styles.vans}>
      <h2>Explore our van options</h2>
      <div className={styles.filterBlock}>

      </div>
      <div className="vansBlock">
        <ul className={styles.vansList}>
          {vans.map(van => <Van van={van}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Vans;
