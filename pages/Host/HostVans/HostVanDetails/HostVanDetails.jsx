import React, {useEffect, useState} from 'react';
import styles from './HostVanDetails.module.css';
import BackLink from "../../../../components/BackLink/BackLink";
import Navigation from "../../../../components/Navigation/Navigation";
import TypeButton from "../../../../components/TypeButton/TypeButton";
import {Outlet, useParams} from "react-router-dom";

const HostVanDetails = () => {
  const {id} = useParams()
  const [currentVan, setCurrentVan] = useState({})
  const names = ['details', 'pricing', 'photos']
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [])

  return (
    <div className={styles.container}>
      <BackLink />
      <div className={styles.mainBlock}>
        <div className={styles.vanDetails}>
          <img src={currentVan.imageUrl} alt={`Photo of ${currentVan.name}`}/>
          <div className={styles.description}>
            <TypeButton typeName={currentVan.type}/>
            <p className={styles.name}>{currentVan.name}</p>
            <p className={styles.price}>${currentVan.price}<span>/day</span></p>
          </div>
        </div>
        <Navigation names={names}/>
        <Outlet context={[currentVan]}/>
      </div>
    </div>
  );
};

export default HostVanDetails;
