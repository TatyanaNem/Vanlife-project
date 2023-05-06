import React, {useEffect, useState} from 'react';
import styles from './HostVans.module.css';
import {Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../../common/API/api";
import {requireAuth} from "../../../common/utils/requireAuth";

export const loader = async () => {
  await requireAuth()
  return getHostVans()
}

const HostVans = () => {
  const vans = useLoaderData()
  const [loading, setLoading] = useState(false)

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
    <section>
      <h3>Your listed vans</h3>

      <ul className={styles.list}>
        {hostVansElements}
      </ul>
    </section>

  );
};

export default HostVans;
