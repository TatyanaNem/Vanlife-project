import React, {useEffect, useState} from 'react';
import styles from './HostVans.module.css';
import {Await, defer, Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../../common/API/api";
import {requireAuth} from "../../../common/utils/requireAuth";
import Loading from "../../../components/Loading/Loading";

export const loader = async ({request}) => {
  await requireAuth(request)
  return defer({hostVans: getHostVans()})
}

const HostVans = () => {
  const hostVansPromise = useLoaderData()

  function renderHostVansElements(hostVans) {
    const hostVansElements = hostVans.map(van => {
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
      <ul className={styles.list}>
        {hostVansElements}
      </ul>
    )
  }

  return (
    <section>
      <h3>Your listed vans</h3>
      <React.Suspense fallback={<Loading text='host vans. Please wait ⌛'/>}>
        <Await resolve={hostVansPromise.hostVans}>
          {renderHostVansElements}
        </Await>
      </React.Suspense>
    </section>

  );
};

export default HostVans;
