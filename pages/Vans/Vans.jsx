import React, {useEffect, useState} from 'react';
import styles from './Vans.module.css';
import Van from "./Van/Van";
import {useLoaderData, useSearchParams} from "react-router-dom";
import classNames from "classnames";
import {getVans} from "../../API/api";

export const loader = () => {
  return getVans()
}

const Vans = () => {
  const vans = useLoaderData()

  const [searchParams, setSearchParams] = useSearchParams()
  const handleFilterChange = (key, value) => {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  const typeFilter = searchParams.get('type')
  const displayedVans = typeFilter
    ? vans.filter(v => v.type.toLowerCase() === typeFilter)
    : vans

    return (
      <div className={styles.vans}>
        <h2>Explore our van options</h2>
        <ul className={styles.filterBlock}>
          <li>
            <button onClick={() => handleFilterChange('type', 'simple')}
                    className={typeFilter === 'simple' ? styles.simpleSelected : styles.simple}
            >
              Simple
            </button>
          </li>
          <li>
            <button onClick={() => handleFilterChange('type', 'luxury')}
                    className={typeFilter === 'luxury' ? styles.luxurySelected : styles.luxury}
            >
              Luxury
            </button>
          </li>
          <li>
            <button onClick={() => handleFilterChange('type', 'rugged')}
                    className={typeFilter === 'rugged' ? styles.ruggedSelected : styles.rugged}
            >
              Rugged
            </button>
          </li>
          {typeFilter && <button onClick={() => handleFilterChange('type', null)}
                  className={styles.clearButton}
          >Clear filters
          </button>}
        </ul>
        <div className={styles.vansBlock}>
          <ul className={styles.vansList}>
            {displayedVans.map(van => <Van key={van.id} van={van} searchParams={searchParams}/>)}
          </ul>
        </div>
      </div>
    )
  };

  export default Vans;
