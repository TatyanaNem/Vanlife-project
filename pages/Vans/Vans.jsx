import React from 'react';
import styles from './Vans.module.css';
import Van from "./Van/Van";
import {Await, defer, useLoaderData, useSearchParams} from "react-router-dom";
import {getVans} from "../../common/API/api";
import Loading from "../../components/Loading/Loading";

export const loader = async () => {
  return defer({vans: getVans()})
}

const Vans = () => {
  const vansPromise = useLoaderData()

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

  function renderVansElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter(v => v.type.toLowerCase() === typeFilter)
      : vans

    return (
      <>
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
      </>
    )
  }

  return (
    <div className={styles.vans}>
      <h2>Explore our van options</h2>
      <React.Suspense fallback={<Loading text='vans. Please wait ⌛'/>}>
        <Await resolve={vansPromise.vans}>
          {renderVansElements}
        </Await>
      </React.Suspense>
    </div>
  )
};

export default Vans;
