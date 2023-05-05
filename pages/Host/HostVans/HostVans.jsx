import React, {useEffect, useState} from 'react';
import styles from './HostVans.module.css';
import {Link} from "react-router-dom";
import {getHostVans} from "../../../API/api";

const HostVans = () => {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadHostVans() {
      setLoading(true)
      const data = await getHostVans()
      setLoading(false)
      setVans(data)
    }

    loadHostVans()
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

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <h3>Your listed vans</h3>

      <ul className={styles.list}>
        {hostVansElements}
      </ul>
    </>

  );
};

export default HostVans;
