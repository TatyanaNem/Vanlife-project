import React, {useEffect, useState} from 'react';
import styles from './Vans.module.css';
import Van from "./Van/Van";
import {useSearchParams} from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  const displayedVans = typeFilter
    ? vans.filter(v => v.type.toLowerCase() === typeFilter)
    : vans


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
      <ul className={styles.filterBlock}>
        <li>
          <button>
            Simple
          </button>
        </li>
        <li>
          <button>
            Luxury
          </button>
        </li>
        <li>
          <button>
            Rugged
          </button>
        </li>
        <button className={styles.clearButton}>Clear filters</button>
      </ul>
      <div className="vansBlock">
        <ul className={styles.vansList}>
          {displayedVans.map(van => <Van van={van}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Vans;
